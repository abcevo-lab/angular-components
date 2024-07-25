(self.webpackChunkangular_latest=self.webpackChunkangular_latest||[]).push([[792],{"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var angular=__webpack_require__("./node_modules/@storybook/addon-docs/angular/index.js");const documentation_namespaceObject=JSON.parse('{"pipes":[],"interfaces":[{"name":"User","id":"interface-User-d4821beac0e4a852e513391b7470981c4353fdd95a18628bb68136c8695b489ee15b926e2e5031bc26cf30e1508e0a362c3ee13a06734702b4d15af140e485d5","file":"src/stories/user.ts","deprecated":false,"deprecationMessage":"","type":"interface","sourceCode":"export interface User {\\n  name: string;\\n}\\n","properties":[{"name":"name","deprecated":false,"deprecationMessage":"","type":"string","optional":false,"description":"","line":2}],"indexSignatures":[],"kind":171,"methods":[],"extends":[]}],"injectables":[],"guards":[],"interceptors":[],"classes":[],"directives":[],"components":[{"name":"AppComponent","id":"component-AppComponent-f6e0a4165d90cd59f3e708780d9a8341fa358b7687dd565495660007b0653a064c738c99f2fcf4933a6716ace42cccf066ae403b54d7fe0acdb9b2879c092f10","file":"src/app/app.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"app-root","styleUrls":[],"styles":[],"template":"<h1>Welcome to {{title}}!</h1>\\n\\n<router-outlet />\\n","templateUrl":[],"viewProviders":[],"hostDirectives":[],"inputsClass":[],"outputsClass":[],"propertiesClass":[{"name":"title","defaultValue":"\'angular-latest\'","deprecated":false,"deprecationMessage":"","type":"string","optional":false,"description":"","line":16}],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":true,"imports":[{"name":"RouterOutlet"}],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component } from \'@angular/core\';\\r\\nimport { RouterOutlet } from \'@angular/router\';\\r\\n\\r\\n@Component({\\r\\n  selector: \'app-root\',\\r\\n  standalone: true,\\r\\n  imports: [RouterOutlet],\\r\\n  template: `\\r\\n    <h1>Welcome to {{title}}!</h1>\\r\\n\\r\\n    <router-outlet />\\r\\n  `,\\r\\n  styles: [],\\r\\n})\\r\\nexport class AppComponent {\\r\\n  title = \'angular-latest\';\\r\\n}\\r\\n","assetsDirs":[],"styleUrlsData":"","stylesData":"","extends":[]},{"name":"ButtonComponent","id":"component-ButtonComponent-86e2311c54fbca7431c12e070d0fd5b0ebe343eec0553a392f182ba0e04a8f86613233d26ee47718fd0e7a65078f580c76a1fcc928ce55de81193d6618025bc4","file":"src/stories/button.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"storybook-button","styleUrls":["./button.css"],"styles":[],"template":"<button   type=\\"button\\"\\n   (click)=\\"onClick.emit($event)\\"\\n   [ngClass]=\\"classes\\"\\n   [ngStyle]=\\"{ \'background-color\': backgroundColor }\\"\\n >\\n   {{ label }}\\n </button>","templateUrl":[],"viewProviders":[],"hostDirectives":[],"inputsClass":[{"name":"backgroundColor","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nWhat background color to use\\n","description":"<p>What background color to use</p>\\n","line":29,"type":"string","decorators":[]},{"name":"label","defaultValue":"\'Button\'","deprecated":false,"deprecationMessage":"","jsdoctags":[{"pos":798,"end":811,"flags":16842752,"modifierFlagsCache":0,"transformFlags":0,"kind":334,"tagName":{"pos":799,"end":807,"flags":16842752,"modifierFlagsCache":0,"transformFlags":0,"kind":80,"escapedText":"required"},"comment":""}],"rawdescription":"\\n\\nButton contents\\n\\n","description":"<p>Button contents</p>\\n","line":43,"type":"string","decorators":[]},{"name":"primary","defaultValue":"false","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nIs this the principal call to action on the page?\\n","description":"<p>Is this the principal call to action on the page?</p>\\n","line":23,"type":"boolean","decorators":[]},{"name":"size","defaultValue":"\'medium\'","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nHow large should the button be?\\n","description":"<p>How large should the button be?</p>\\n","line":35,"type":"\\"small\\" | \\"medium\\" | \\"large\\"","decorators":[]}],"outputsClass":[{"name":"onClick","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","rawdescription":"\\n\\nOptional click handler\\n","description":"<p>Optional click handler</p>\\n","line":49,"type":"EventEmitter"}],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":true,"imports":[{"name":"CommonModule","type":"module"}],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { CommonModule } from \'@angular/common\';\\nimport { Component, Input, Output, EventEmitter } from \'@angular/core\';\\n\\n@Component({\\n  selector: \'storybook-button\',\\n  standalone: true,\\n  imports: [CommonModule],\\n  template: ` <button\\n    type=\\"button\\"\\n    (click)=\\"onClick.emit($event)\\"\\n    [ngClass]=\\"classes\\"\\n    [ngStyle]=\\"{ \'background-color\': backgroundColor }\\"\\n  >\\n    {{ label }}\\n  </button>`,\\n  styleUrls: [\'./button.css\'],\\n})\\nexport class ButtonComponent {\\n  /**\\n   * Is this the principal call to action on the page?\\n   */\\n  @Input()\\n  primary = false;\\n\\n  /**\\n   * What background color to use\\n   */\\n  @Input()\\n  backgroundColor?: string;\\n\\n  /**\\n   * How large should the button be?\\n   */\\n  @Input()\\n  size: \'small\' | \'medium\' | \'large\' = \'medium\';\\n\\n  /**\\n   * Button contents\\n   *\\n   * @required\\n   */\\n  @Input()\\n  label = \'Button\';\\n\\n  /**\\n   * Optional click handler\\n   */\\n  @Output()\\n  onClick = new EventEmitter<Event>();\\n\\n  public get classes(): string[] {\\n    const mode = this.primary ? \'storybook-button--primary\' : \'storybook-button--secondary\';\\n\\n    return [\'storybook-button\', `storybook-button--${this.size}`, mode];\\n  }\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":".storybook-button {\\n  font-family: \'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  font-weight: 700;\\n  border: 0;\\n  border-radius: 3em;\\n  cursor: pointer;\\n  display: inline-block;\\n  line-height: 1;\\n}\\n.storybook-button--primary {\\n  color: white;\\n  background-color: #1ea7fd;\\n}\\n.storybook-button--secondary {\\n  color: #333;\\n  background-color: transparent;\\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\\n}\\n.storybook-button--small {\\n  font-size: 12px;\\n  padding: 10px 16px;\\n}\\n.storybook-button--medium {\\n  font-size: 14px;\\n  padding: 11px 20px;\\n}\\n.storybook-button--large {\\n  font-size: 16px;\\n  padding: 12px 24px;\\n}\\n","styleUrl":"./button.css"}],"stylesData":"","extends":[],"accessors":{"classes":{"name":"classes","getSignature":{"name":"classes","type":"[]","returnType":"string[]","line":51}}}},{"name":"ButtonComponent","id":"component-ButtonComponent-480ab3a6497634b05974949da89e1ce7fc50be043b9d8b05cb44fd824ed58728047fe54ca293a04ccb2e98c5d18ae79530ce0d138dd35290e21479523bc59e01-1","file":"src/components/button/button.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"app-button","styleUrls":["./button.component.css"],"styles":[],"templateUrl":["./button.component.html"],"viewProviders":[],"hostDirectives":[],"inputsClass":[{"name":"label","defaultValue":"\'Click me\'","deprecated":false,"deprecationMessage":"","line":9,"type":"string","decorators":[]}],"outputsClass":[],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":false,"imports":[],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component, Input } from \'@angular/core\';\\r\\n\\r\\n@Component({\\r\\n  selector: \'app-button\',\\r\\n  templateUrl: \'./button.component.html\',\\r\\n  styleUrls: [\'./button.component.css\']\\r\\n})\\r\\nexport class ButtonComponent {\\r\\n  @Input() label: string = \'Click me\';\\r\\n}\\r\\n","assetsDirs":[],"styleUrlsData":[{"data":".btn {\\r\\n    padding: 10px 20px;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    background-color: #007bff;\\r\\n    color: white;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  \\r\\n  .btn:hover {\\r\\n    background-color: #0056b3;\\r\\n  }\\r\\n  ","styleUrl":"./button.component.css"}],"stylesData":"","extends":[],"isDuplicate":true,"duplicateId":1,"duplicateName":"ButtonComponent-1","templateData":"<button class=\\"btn\\">{{ label }}</button>\\r\\n"},{"name":"HeaderComponent","id":"component-HeaderComponent-cad94b233ec8e80ceb541e7972c5f9737e08237b4e137112f3987ca48ee0cce5c0d57798d41daa5d4d24d6bdbb2df1606ab68cca2aa0a1785e38f99f3cac0729","file":"src/stories/header.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"storybook-header","styleUrls":["./header.css"],"styles":[],"template":"<header>    <div class=\\"storybook-header\\">\\n      <div>\\n        <svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n          <g fill=\\"none\\" fillRule=\\"evenodd\\">\\n            <path\\n              d=\\"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z\\"\\n              fill=\\"#FFF\\"\\n            />\\n            <path\\n              d=\\"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z\\"\\n              fill=\\"#555AB9\\"\\n            />\\n            <path\\n              d=\\"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z\\"\\n              fill=\\"#91BAF8\\"\\n            />\\n          </g>\\n        </svg>\\n        <h1>Acme</h1>\\n      </div>\\n      <div>\\n        <div *ngIf=\\"user\\">\\n          <span class=\\"welcome\\">\\n            Welcome, <b>{{ user.name }}</b\\n            >!\\n          </span>\\n          <storybook-button\\n            *ngIf=\\"user\\"\\n            size=\\"small\\"\\n            (onClick)=\\"onLogout.emit($event)\\"\\n            label=\\"Log out\\"\\n          ></storybook-button>\\n        </div>\\n        <div *ngIf=\\"!user\\">\\n          <storybook-button\\n            *ngIf=\\"!user\\"\\n            size=\\"small\\"\\n            class=\\"margin-left\\"\\n            (onClick)=\\"onLogin.emit($event)\\"\\n            label=\\"Log in\\"\\n          ></storybook-button>\\n          <storybook-button\\n            *ngIf=\\"!user\\"\\n            size=\\"small\\"\\n            [primary]=\\"true\\"\\n            class=\\"margin-left\\"\\n            (onClick)=\\"onCreateAccount.emit($event)\\"\\n            label=\\"Sign up\\"\\n          ></storybook-button>\\n        </div>\\n      </div>\\n    </div>\\n  </header>","templateUrl":[],"viewProviders":[],"hostDirectives":[],"inputsClass":[{"name":"user","defaultValue":"null","deprecated":false,"deprecationMessage":"","line":69,"type":"User | null","decorators":[]}],"outputsClass":[{"name":"onCreateAccount","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","line":78,"type":"EventEmitter"},{"name":"onLogin","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","line":72,"type":"EventEmitter"},{"name":"onLogout","defaultValue":"new EventEmitter<Event>()","deprecated":false,"deprecationMessage":"","line":75,"type":"EventEmitter"}],"propertiesClass":[],"methodsClass":[],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":true,"imports":[{"name":"CommonModule","type":"module"},{"name":"ButtonComponent","type":"component"}],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component, Input, Output, EventEmitter } from \'@angular/core\';\\nimport { CommonModule } from \'@angular/common\';\\n\\nimport { ButtonComponent } from \'./button.component\';\\nimport type { User } from \'./user\';\\n\\n@Component({\\n  selector: \'storybook-header\',\\n  standalone: true,\\n  imports: [CommonModule, ButtonComponent],\\n  template: `<header>\\n    <div class=\\"storybook-header\\">\\n      <div>\\n        <svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n          <g fill=\\"none\\" fillRule=\\"evenodd\\">\\n            <path\\n              d=\\"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z\\"\\n              fill=\\"#FFF\\"\\n            />\\n            <path\\n              d=\\"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z\\"\\n              fill=\\"#555AB9\\"\\n            />\\n            <path\\n              d=\\"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z\\"\\n              fill=\\"#91BAF8\\"\\n            />\\n          </g>\\n        </svg>\\n        <h1>Acme</h1>\\n      </div>\\n      <div>\\n        <div *ngIf=\\"user\\">\\n          <span class=\\"welcome\\">\\n            Welcome, <b>{{ user.name }}</b\\n            >!\\n          </span>\\n          <storybook-button\\n            *ngIf=\\"user\\"\\n            size=\\"small\\"\\n            (onClick)=\\"onLogout.emit($event)\\"\\n            label=\\"Log out\\"\\n          ></storybook-button>\\n        </div>\\n        <div *ngIf=\\"!user\\">\\n          <storybook-button\\n            *ngIf=\\"!user\\"\\n            size=\\"small\\"\\n            class=\\"margin-left\\"\\n            (onClick)=\\"onLogin.emit($event)\\"\\n            label=\\"Log in\\"\\n          ></storybook-button>\\n          <storybook-button\\n            *ngIf=\\"!user\\"\\n            size=\\"small\\"\\n            [primary]=\\"true\\"\\n            class=\\"margin-left\\"\\n            (onClick)=\\"onCreateAccount.emit($event)\\"\\n            label=\\"Sign up\\"\\n          ></storybook-button>\\n        </div>\\n      </div>\\n    </div>\\n  </header>`,\\n  styleUrls: [\'./header.css\'],\\n})\\nexport class HeaderComponent {\\n  @Input()\\n  user: User | null = null;\\n\\n  @Output()\\n  onLogin = new EventEmitter<Event>();\\n\\n  @Output()\\n  onLogout = new EventEmitter<Event>();\\n\\n  @Output()\\n  onCreateAccount = new EventEmitter<Event>();\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":".storybook-header {\\n  font-family: \'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n  padding: 15px 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.storybook-header svg {\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n\\n.storybook-header h1 {\\n  font-weight: 700;\\n  font-size: 20px;\\n  line-height: 1;\\n  margin: 6px 0 6px 10px;\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n\\n.storybook-header button + button {\\n  margin-left: 10px;\\n}\\n\\n.storybook-header .welcome {\\n  color: #333;\\n  font-size: 14px;\\n  margin-right: 10px;\\n}\\n","styleUrl":"./header.css"}],"stylesData":"","extends":[]},{"name":"PageComponent","id":"component-PageComponent-d32b0f19628254ea3fc5526c4d4564ada1cc83cf936759006d90a46f5874b02a3359e331bddda20b22e74a616a6443c660602ba74dd38ebe1160759e0de6f7ba","file":"src/stories/page.component.ts","encapsulation":[],"entryComponents":[],"inputs":[],"outputs":[],"providers":[],"selector":"storybook-page","styleUrls":["./page.css"],"styles":[],"template":"<article>    <storybook-header\\n      [user]=\\"user\\"\\n      (onLogout)=\\"doLogout()\\"\\n      (onLogin)=\\"doLogin()\\"\\n      (onCreateAccount)=\\"doCreateAccount()\\"\\n    ></storybook-header>\\n    <section class=\\"storybook-page\\">\\n      <h2>Pages in Storybook</h2>\\n      <p>\\n        We recommend building UIs with a\\n        <a href=\\"https://componentdriven.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">\\n          <strong>component-driven</strong>\\n        </a>\\n        process starting with atomic components and ending with pages.\\n      </p>\\n      <p>\\n        Render pages with mock data. This makes it easy to build and review page states without\\n        needing to navigate to them in your app. Here are some handy patterns for managing page data\\n        in Storybook:\\n      </p>\\n      <ul>\\n        <li>\\n          Use a higher-level connected component. Storybook helps you compose such data from the\\n          \\"args\\" of child component stories\\n        </li>\\n        <li>\\n          Assemble data in the page component from your services. You can mock these services out\\n          using Storybook.\\n        </li>\\n      </ul>\\n      <p>\\n        Get a guided tutorial on component-driven development at\\n        <a href=\\"https://storybook.js.org/tutorials/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">\\n          Storybook tutorials\\n        </a>\\n        . Read more in the\\n        <a href=\\"https://storybook.js.org/docs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"> docs </a>\\n        .\\n      </p>\\n      <div class=\\"tip-wrapper\\">\\n        <span class=\\"tip\\">Tip</span> Adjust the width of the canvas with the\\n        <svg width=\\"10\\" height=\\"10\\" viewBox=\\"0 0 12 12\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n          <g fill=\\"none\\" fillRule=\\"evenodd\\">\\n            <path\\n              d=\\"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z\\"\\n              id=\\"a\\"\\n              fill=\\"#999\\"\\n            />\\n          </g>\\n        </svg>\\n        Viewports addon in the toolbar\\n      </div>\\n    </section>\\n  </article>","templateUrl":[],"viewProviders":[],"hostDirectives":[],"inputsClass":[],"outputsClass":[],"propertiesClass":[{"name":"user","defaultValue":"null","deprecated":false,"deprecationMessage":"","type":"User | null","optional":false,"description":"","line":69}],"methodsClass":[{"name":"doCreateAccount","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":79,"deprecated":false,"deprecationMessage":""},{"name":"doLogin","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":75,"deprecated":false,"deprecationMessage":""},{"name":"doLogout","args":[],"optional":false,"returnType":"void","typeParameters":[],"line":71,"deprecated":false,"deprecationMessage":""}],"deprecated":false,"deprecationMessage":"","hostBindings":[],"hostListeners":[],"standalone":true,"imports":[{"name":"CommonModule","type":"module"},{"name":"HeaderComponent","type":"component"}],"description":"","rawdescription":"\\n","type":"component","sourceCode":"import { Component } from \'@angular/core\';\\nimport { CommonModule } from \'@angular/common\';\\n\\nimport { HeaderComponent } from \'./header.component\';\\nimport type { User } from \'./user\';\\n\\n@Component({\\n  selector: \'storybook-page\',\\n  standalone: true,\\n  imports: [CommonModule, HeaderComponent],\\n  template: `<article>\\n    <storybook-header\\n      [user]=\\"user\\"\\n      (onLogout)=\\"doLogout()\\"\\n      (onLogin)=\\"doLogin()\\"\\n      (onCreateAccount)=\\"doCreateAccount()\\"\\n    ></storybook-header>\\n    <section class=\\"storybook-page\\">\\n      <h2>Pages in Storybook</h2>\\n      <p>\\n        We recommend building UIs with a\\n        <a href=\\"https://componentdriven.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">\\n          <strong>component-driven</strong>\\n        </a>\\n        process starting with atomic components and ending with pages.\\n      </p>\\n      <p>\\n        Render pages with mock data. This makes it easy to build and review page states without\\n        needing to navigate to them in your app. Here are some handy patterns for managing page data\\n        in Storybook:\\n      </p>\\n      <ul>\\n        <li>\\n          Use a higher-level connected component. Storybook helps you compose such data from the\\n          \\"args\\" of child component stories\\n        </li>\\n        <li>\\n          Assemble data in the page component from your services. You can mock these services out\\n          using Storybook.\\n        </li>\\n      </ul>\\n      <p>\\n        Get a guided tutorial on component-driven development at\\n        <a href=\\"https://storybook.js.org/tutorials/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">\\n          Storybook tutorials\\n        </a>\\n        . Read more in the\\n        <a href=\\"https://storybook.js.org/docs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"> docs </a>\\n        .\\n      </p>\\n      <div class=\\"tip-wrapper\\">\\n        <span class=\\"tip\\">Tip</span> Adjust the width of the canvas with the\\n        <svg width=\\"10\\" height=\\"10\\" viewBox=\\"0 0 12 12\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n          <g fill=\\"none\\" fillRule=\\"evenodd\\">\\n            <path\\n              d=\\"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z\\"\\n              id=\\"a\\"\\n              fill=\\"#999\\"\\n            />\\n          </g>\\n        </svg>\\n        Viewports addon in the toolbar\\n      </div>\\n    </section>\\n  </article>`,\\n  styleUrls: [\'./page.css\'],\\n})\\nexport class PageComponent {\\n  user: User | null = null;\\n\\n  doLogout() {\\n    this.user = null;\\n  }\\n\\n  doLogin() {\\n    this.user = { name: \'Jane Doe\' };\\n  }\\n\\n  doCreateAccount() {\\n    this.user = { name: \'Jane Doe\' };\\n  }\\n}\\n","assetsDirs":[],"styleUrlsData":[{"data":".storybook-page {\\n  font-family: \'Nunito Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  line-height: 24px;\\n  padding: 48px 20px;\\n  margin: 0 auto;\\n  max-width: 600px;\\n  color: #333;\\n}\\n\\n.storybook-page h2 {\\n  font-weight: 700;\\n  font-size: 32px;\\n  line-height: 1;\\n  margin: 0 0 4px;\\n  display: inline-block;\\n  vertical-align: top;\\n}\\n\\n.storybook-page p {\\n  margin: 1em 0;\\n}\\n\\n.storybook-page a {\\n  text-decoration: none;\\n  color: #1ea7fd;\\n}\\n\\n.storybook-page ul {\\n  padding-left: 30px;\\n  margin: 1em 0;\\n}\\n\\n.storybook-page li {\\n  margin-bottom: 8px;\\n}\\n\\n.storybook-page .tip {\\n  display: inline-block;\\n  border-radius: 1em;\\n  font-size: 11px;\\n  line-height: 12px;\\n  font-weight: 700;\\n  background: #e7fdd8;\\n  color: #66bf3c;\\n  padding: 4px 12px;\\n  margin-right: 10px;\\n  vertical-align: top;\\n}\\n\\n.storybook-page .tip-wrapper {\\n  font-size: 13px;\\n  line-height: 20px;\\n  margin-top: 40px;\\n  margin-bottom: 40px;\\n}\\n\\n.storybook-page .tip-wrapper svg {\\n  display: inline-block;\\n  height: 12px;\\n  width: 12px;\\n  margin-right: 4px;\\n  vertical-align: top;\\n  margin-top: 3px;\\n}\\n\\n.storybook-page .tip-wrapper svg path {\\n  fill: #1ea7fd;\\n}\\n","styleUrl":"./page.css"}],"stylesData":"","extends":[]}],"modules":[],"miscellaneous":{"variables":[{"name":"appConfig","ctype":"miscellaneous","subtype":"variable","file":"src/app/app.config.ts","deprecated":false,"deprecationMessage":"","type":"ApplicationConfig","defaultValue":"{\\r\\n  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]\\r\\n}"}],"functions":[],"typealiases":[],"enumerations":[],"groupedVariables":{"src/app/app.config.ts":[{"name":"appConfig","ctype":"miscellaneous","subtype":"variable","file":"src/app/app.config.ts","deprecated":false,"deprecationMessage":"","type":"ApplicationConfig","defaultValue":"{\\r\\n  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]\\r\\n}"}]},"groupedFunctions":{},"groupedEnumerations":{},"groupedTypeAliases":{}},"routes":[],"coverage":{"count":11,"status":"low","files":[{"filePath":"src/app/app.component.ts","type":"component","linktype":"component","name":"AppComponent","coveragePercent":0,"coverageCount":"0/2","status":"low"},{"filePath":"src/app/app.config.ts","type":"variable","linktype":"miscellaneous","linksubtype":"variable","name":"appConfig","coveragePercent":0,"coverageCount":"0/1","status":"low"},{"filePath":"src/components/button/button.component.ts","type":"component","linktype":"component","name":"ButtonComponent","coveragePercent":0,"coverageCount":"0/2","status":"low"},{"filePath":"src/stories/button.component.ts","type":"component","linktype":"component","name":"ButtonComponent","coveragePercent":83,"coverageCount":"5/6","status":"very-good"},{"filePath":"src/stories/header.component.ts","type":"component","linktype":"component","name":"HeaderComponent","coveragePercent":0,"coverageCount":"0/5","status":"low"},{"filePath":"src/stories/page.component.ts","type":"component","linktype":"component","name":"PageComponent","coveragePercent":0,"coverageCount":"0/5","status":"low"},{"filePath":"src/stories/user.ts","type":"interface","linktype":"interface","name":"User","coveragePercent":0,"coverageCount":"0/2","status":"low"}]}}');(0,angular.$)(documentation_namespaceObject);const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const pipeline=x=>x(),importers=[function(){var _ref=(0,asyncToGenerator.A)((function*(path){if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)}));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=(0,asyncToGenerator.A)((function*(path){if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}));return function(_x2){return _ref2.apply(this,arguments)}}()];function _importFn(){return(_importFn=(0,asyncToGenerator.A)((function*(path){for(let i=0;i<importers.length;i++){const moduleExports=yield pipeline((()=>importers[i](path)));if(moduleExports)return moduleExports}}))).apply(this,arguments)}const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((function importFn(_x3){return _importFn.apply(this,arguments)}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/angular/dist/client/preview-prod.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/docs/config.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/config.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/styles.scss?ngGlobalStyle":()=>{},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Configure.mdx":["./src/stories/Configure.mdx",170,187]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/button/button.stories":["./src/components/button/button.stories.ts",545],"./components/button/button.stories.ts":["./src/components/button/button.stories.ts",545],"./stories/button.stories":["./src/stories/button.stories.ts",237,791],"./stories/button.stories.ts":["./src/stories/button.stories.ts",237,791],"./stories/header.stories":["./src/stories/header.stories.ts",237,784],"./stories/header.stories.ts":["./src/stories/header.stories.ts",237,784],"./stories/page.stories":["./src/stories/page.stories.ts",237,210],"./stories/page.stories.ts":["./src/stories/page.stories.ts",237,210]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[183],(()=>(__webpack_exec__("./storybook-config-entry.js"),__webpack_exec__("./node_modules/zone.js/fesm2015/zone.js"),__webpack_exec__("./node_modules/@angular/compiler/fesm2022/compiler.mjs"),__webpack_exec__("./src/styles.scss?ngGlobalStyle"))));__webpack_require__.O()}]);