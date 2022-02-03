import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RichTextDirective } from 'src/app/lib/components/rich-text/rich-text.directive';
import { UtilsModule } from 'src/app/utils/utils.module';
import { YieldsComponent, YieldsRecord } from "src/app/routing/yields";

import { ContainerFlexComponent } from './container-flex.component';

describe('ContainerBlockComponent', () => {
  let component: ContainerFlexComponent;
  let fixture: ComponentFixture<ContainerFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContainerFlexComponent,
        RichTextDirective
    ],
      imports: [ CommonModule, UtilsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFlexComponent);
    component = fixture.componentInstance;
  });

  it('should generate column by number of items', () => {
    const numberColumnTest = 4;
    component.numberOfColumn = numberColumnTest;
    const fakeRendering : YieldsComponent = { yields: {} };
    Array.from(Array(4)).forEach( (_, index) => {
      const yields = fakeRendering?.yields;
      yields![`${index}-yield-factory`] = [];
    });
    component.rendering = fakeRendering;
    fixture.detectChanges();
    const containerBlockElement: HTMLElement = fixture.nativeElement;
    const divsElement = containerBlockElement.querySelectorAll('.flex-row');
    expect(divsElement.length).toEqual(numberColumnTest);
  });

});
