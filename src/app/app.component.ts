import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'space_avei';
  data: any [] = [];


constructor(
    private http: HttpClient
  )

  {}

  ngOnInit() {
  this.http.get('https://api.spacexdata.com/v4/ships').subscribe((data: any) => {
    this.data = data;
    
  })
}
}

