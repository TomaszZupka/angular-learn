# AngularTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Attribute directive
``` 
@input() defaultColor: string = 'transparent';
@input('appBetterHighlight') highlightColor: string = 'blue';
@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
  this.backgroundColor = this.defaultColor;
}

ngOnInit() {
//  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
}

@HostListener('mouseenter') mouseover(eventData: Event) {
//  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
//  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
  this.backgroundColor = this.defaultColor;
}
```

## Structural directive
```
@Input() set appUnless(condition: boolean) {
  if (!condition) {
    this.vcRef.createEmbeddedView(this.templateRef);
  } else {
    this.vcRef.clear();
  }
}

constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
}
```
