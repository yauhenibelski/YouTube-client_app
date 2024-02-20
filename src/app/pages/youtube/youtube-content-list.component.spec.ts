import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeContentListComponent } from './youtube-content-list.component';

describe('YoutubeContentListComponent', () => {
    let component: YoutubeContentListComponent;
    let fixture: ComponentFixture<YoutubeContentListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [YoutubeContentListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(YoutubeContentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
