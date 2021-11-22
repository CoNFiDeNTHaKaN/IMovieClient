export class MovieInfo{
    release_date:Date | null=null;
    rating:number=0;
    image_url:string='';
    plot:string='';
    rank:number=0;
    running_time_secs:number=0;
    
    actors:Array<string>=[];
    genres:Array<string>=[];
    directors:Array<string>=[];

}