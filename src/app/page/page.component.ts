import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

declare let $: any;

@Component({
    templateUrl: './html/home.component.html'
})
export class HomePageComponent {
    private articles = environment.HOME_PAGE_DEMO_DATA;

    ngAfterViewInit() {
        $(window).scroll(function () {
            let y = $(window).scrollTop();
            // console.log(`[ DEBUG ] ${$(window).scrollTop()}`);
            if (y > 70) {
                $('#hideNavBar').stop(true).fadeTo("fast", 2.0);
            } else {
                $('#hideNavBar').fadeOut(500);
            }
        });
    }

    onArticleCardClicked(article: any): void {
        console.log(article);
    }
}

@Component({
    templateUrl: './html/login.component.html'
})
export class LoginPageComponent {

}
