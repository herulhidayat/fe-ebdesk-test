import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
}) 
export class MenuService{
    isMenu = new BehaviorSubject<boolean>(false);
    currentIsMenu = this.isMenu.asObservable();

    setMenu(isMenu: boolean) {
        this.isMenu.next(isMenu);
    }
}