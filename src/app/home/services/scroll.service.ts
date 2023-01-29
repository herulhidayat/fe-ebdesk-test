import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
}) 
export class NavScrollService{
    isScroll = new BehaviorSubject<boolean>(false);
    currentIsActive = this.isScroll.asObservable();

    setScroll(isActive: boolean) {
        this.isScroll.next(isActive);
    }
}