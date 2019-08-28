import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPokemonListComponent } from './widget-pokemon-list.component';

describe('WidgetPokemonListComponent', () => {
  let component: WidgetPokemonListComponent;
  let fixture: ComponentFixture<WidgetPokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
