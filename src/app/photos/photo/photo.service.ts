import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' }) //Essa propriedade faz com que esse PhotoService possa ser acessada por toda a aplicação
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        
        return this.http
        .get<Photo[]>(`${API}/${userName}/photos`);

    }

}

