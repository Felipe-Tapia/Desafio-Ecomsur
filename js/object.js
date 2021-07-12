class Pelicula{
        title;
        year;
        rated;
        released;
        runtime;
        genre;
        director;
        writer;
        actors;
        language;
        country;
        awards;
        poster;
        ratings;
        metascore;
        imdbRating;
        imdbVotes;
        imdbID;
        type;
        website ;    
        dVD;
        boxOffice;
        production;
        website;
        response;
        plot;
        constructor(){
            this.year="";
            this.title="";
            this.rated="";
            this.released="";
            this.runtime="";
            this.genre="";
            this.director="";
            this.writer="";
            this.actors="";
            this.language="";
            this.country="";
            this.awards="";
            this.poster="";
            this.ratings = new Array();
            this.metascore="";
            this.imdbRating="";
            this.imdbVotes="";
            this.imdbID="";
            this.type="";
            this.website="";    
            this.dVD="";
            this.boxOffice="";
            this.production="";
            this.website="";
            this.response="";
            this.plot="";
        }
}

class Ratings{
    Source;
    Value;
    constructor(){
        this.Source = "";
        this.Value = "";
    }
}