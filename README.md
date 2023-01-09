# Animesite

This project contains such Angular Features as: Reactive Forms, HTTP, Lazy-loading, usage of library, Guard, async pipe and Rxjs Observable operators. Also there is an original player, made via Angular.

It has working system of authorization, implemented via localStorage, and following pages:
- Home Page
- Anime Page
- Anime Details Page (information about certain anime and recomendations, if present)
- Search Page (accessible through search bar in header)
- Authorization Page (Reactive Forms)
- Profile Page (available after registration)

# Changes
Now all the observables work not with subsciption, but via async pipe (with the exception for slider, due to it being side library)
On SingleAnime page i've implemented Smart-Dumb component concept. The SingleAnimeComponent fills in as smart one, and Reccomendation Component represents the dumb one

# Used API

https://docs.api.jikan.moe

# Details

This project was generated with Angular CLI version 14.2.6.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`
