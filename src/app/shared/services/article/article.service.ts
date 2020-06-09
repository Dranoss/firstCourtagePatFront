import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../core/classes/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // A SUPPRIMER LORSQUE NOUS AURONS LE LIEN AVEC LE BACK
  articles: Article[] = [
    {
      id: 1,
      texts: [
        {id: 1, content: 'Quid? qui se etiam nunc subsidiis patrimonii aut amicorum liberalitate sustentant, hos perire patiemur? An, si qui frui publico non potuit per hostem, hic tegitur ipsa lege censoria; quem is frui non sinit, qui est, etiamsi non appellatur, hostis, huic ferri auxilium non oportet? Retinete igitur in provincia diutius eum, qui de sociis cum hostibus, de civibus cum sociis faciat pactiones, qui hoc etiam se pluris esse quam collegam putet, quod ille vos tristia voltuque deceperit, ipse numquam se minus quam erat, nequam esse simularit. Piso autem alio quodam modo gloriatur se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus existimaretur.'},
      ],
      pictures: [
        {id: 1, url: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'},
        {id: 2, url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        {id: 3, url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80'}
      ],
      videoCode: 'evkLxCeGWok',
      order: {video: 1, text: 2, picture: 3},
      // ou, si on suit la solution du back:
      // videoOrder: 1,
      // textOrder: 2,
      // pictureOrder: 3,
    },
    {
      id: 2,
      texts: [
        {id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
    ],
      pictures: [
        {id: 4, url: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
        {id: 5, url: 'https://via.placeholder.com/150?text=IMAGE-CONSEIL'},
        {id: 6, url: 'https://via.placeholder.com/150?text=IMAGE-CONSEIL'}
      ],
      videoCode: '9CkpmNzr5Yw',
      order: {video: 2, text: 1, picture: 3}
    },
    {
      id: 3,
      texts: [
        {id: 4, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ],
      pictures: [
        {id: 7, url: 'https://via.placeholder.com/150?text=IMAGE-COURTAGE'},
        {id: 8, url: 'https://via.placeholder.com/150?text=IMAGE-COURTAGE'},
        {id: 9, url: 'https://via.placeholder.com/150?text=IMAGE-COURTAGE'}
      ],
      videoCode: 'p725rZK8--E',
      order: {video: 2, text: 1, picture: 3},
    },
    {
      id: 4,
      texts : [
        {id : 5, content: 'COURTAGE PATRIMOINE, située au 37 avenue Jean Lassauguette Bat E Apt 108 33270 Floirac est une EURL au capital de 1 000 €, enregistrée au RCS de Bordeaux sous le numéro N° XXXXXXXXXXX. Enregistrée à l’ORIAS sous le N° XXXXXX (www.orias.fr) en qualité de : IOBSP (Intermédiaire en Opération Bancaire et Service de Paiement) IAS (Intermédiaire en Assurance) Directeur de la publication du site : Mr Glenn Gendre (gérant COURTAGE PATRIMOINE)'}
      ],
      pictures : [],
      videoCode : '',
      order: {video: 2, text: 1, picture: 3}
    }
  ];

  // A DEFINIR POUR LIER LE BACK
  private ARTICLE_URL = '';

  constructor(private http: HttpClient) { }

  getArticleById(id: number): Article{
  // A UTILISER LORSQUE L'ON AURA LE BACK
  // getArticleById(id: number): Observable<Article>{
  //   this.http.get<Article>(this.ARTICLE_URL} +`/${id}`);
  // }

    // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
    const article = this.articles.find(x => x.id === id);
    return article;
  }

  putArticleById(article: Article): Observable<Article>{
    return this.http.put<Article>(this.ARTICLE_URL + `/${article.id}`, article);
  }
}
