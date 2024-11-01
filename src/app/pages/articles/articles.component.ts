import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Article {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  currentPage = 1;
  itemsPerPage = 8;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Replace this URL with your actual JSON endpoint
    this.http.get<Article[]>('/articulos.json').subscribe(data => {
      this.articles = data;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.articles.length / this.itemsPerPage);
  }

  get paginatedArticles(): Article[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.articles.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}