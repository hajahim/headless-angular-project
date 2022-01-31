import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent, NavigationItem } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  it('should convert each items to li tag element', () => {
    const navigationItems: NavigationItem[] = [];
    navigationItems.push({
      label: 'test1',
      url: '/'
    }, {
      label: 'test2',
      url: '/test2'
    });
    component.items = navigationItems;
    fixture.detectChanges();
    const navigationElement: HTMLElement = fixture.nativeElement;
    const li = navigationElement.querySelectorAll('li');
    expect(li.length).toEqual(navigationItems.length);
  });

  it('should contain each link element with propper href value', () => {
    const navigationItems: NavigationItem[] = [];
    navigationItems.push({
      label: 'test1',
      url: '/'
    }, {
      label: 'test2',
      url: '/test2'
    });
    component.items = navigationItems;
    fixture.detectChanges();
    const navigationElement: HTMLElement = fixture.nativeElement;
    let containAll = true;
    navigationItems.forEach( currentItem => {
      const targetedLink = navigationElement.querySelectorAll(`a[href="${currentItem.url}"]`);
      containAll = targetedLink.length > 0;
    });
    expect(containAll).toBeTruthy();
  });
});
