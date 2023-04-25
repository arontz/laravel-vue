<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\books;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
// use Request;

class BooksController extends Controller
{

    public function store_view(): Response
    {
        return Inertia::render('Book/Create');
    }
    public function list(Request $request)
    {
        $books = books::query()->when($request->get('search'), function ($query, $search){
            $query->where('name', 'like', "%{$search}%");
        })
        ->select('id','name','genre','isbn', 'author', 'description')->orderby('name')->get();
        return Inertia::render('Book/List', [
            'books' => $books
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $fields = $request-> validate([
            'name'=> 'required|string',
            'isbn'=> 'required|unique:books,isbn',
            'author'=> 'required|string',
            'genre'=> 'required|string',
            'description'=> 'required|string',
        ]);

        $books = books::create([
            'name' => $fields['name'],
            'genre'=> $fields['genre'],
            'isbn'=> $fields['isbn'],
            'author'=> $fields['author'],
            'description'=> $fields['description'],
        ]);

        // return redirect()->back()->with('success', 'some message');
        session()->flash('success', 'New data has been added.');
        return Redirect::route('book.list')->with('message', 'successfully Added New Book');;
    }

    public function result(Request $request)
    {
        $name = $request->input('name');
        $isbn = $request->input('isbn');

        $books = books::query()->where('name', $name)->where('isbn', $isbn)
        ->select('id','name','genre','isbn', 'author', 'description')->orderby('name')->get();
        return Inertia::render('Book/Search', [
            'books' => $books,
            'search' => true
        ]);
    }

    public function toSearch()
    {
        return Inertia::render('Book/Search', [
            'search' => false
        ]);
    }
}
