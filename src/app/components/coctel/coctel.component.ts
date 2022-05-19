import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CoctelService } from 'src/app/services/coctel.service';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.css']
})
export class CoctelComponent implements OnInit {
  quote:any;
  quote1:any;
  constructor(private Coctel:CoctelService) { }

  ngOnInit(): void {
  }
  mostrarQuote():void{
    this.Coctel.getQuote().subscribe(data=>this.quote=data.drinks);
    this.Coctel.getQuote().subscribe(data=>this.quote1=data.drinks);
  }
}
