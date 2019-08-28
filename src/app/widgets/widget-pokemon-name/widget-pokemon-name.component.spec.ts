import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPokemonNameComponent } from './widget-pokemon-name.component';

describe('WidgetPokemonNameComponent', () => {
  let component: WidgetPokemonNameComponent;
  let fixture: ComponentFixture<WidgetPokemonNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPokemonNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPokemonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
