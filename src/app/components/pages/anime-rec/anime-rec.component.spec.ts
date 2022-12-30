import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRecComponent } from './anime-rec.component';

describe('AnimeRecComponent', () => {
  let component: AnimeRecComponent;
  let fixture: ComponentFixture<AnimeRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
