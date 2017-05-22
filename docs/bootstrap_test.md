 All Bootstrap elements test page. [Source](https://gist.github.com/letanure/e0e768901911cf0ad3b50cab665581a5).
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h1 id="rules"> Styleguide</h2>
      </div>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Rules ============================================================= -->
<!-- =================================================================== -->
## Rules
<article>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <p>Use the technique of <strong>Mobile First</strong> to creat the pages and components.</p>
      <p>Always start with the classes relates do the smaller screens, Example</p>
      <p>
        <span class="text-success">Right</span>
        <code>.col-xs-12.col-md-6</code>
      </p>
      <p>
        <span class="text-danger">Wrong</span>
        <code>.col-md-6.col-xs-12</code>
        <code>.col-xs-12.col-lg-6.col-md-4</code>
      </p>
      <p>Always start writting the grid elements.</p>
      <p>Avoid mix elements with grid classes and other component classes</p>
      <p>Start using elements already created on bootstrap instead create new ones</p>
      <p>Use the <code>grid</code> classes to orders and change the orders of the elements, but avoid too many changes in the same page.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Colors ============================================================ -->
<!-- =================================================================== -->
## Colors
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Darker colors</h3>
    </div>
    <div class="col-xs-12 col-lg-8 text-center text-white">
      <div class="bs-component">
        <div class="bg-primary">
          <h4 class=" text-white">Background primary</h4>
        </div>
        <div class="bg-success">
          <h4 class="text-white">Background success</h4>
        </div>
        <div class="bg-info">
          <h4>Background info</h4>
        </div>
        <div class="bg-warning">
          <h4 class="text-white">Background warning</h4>
        </div>
        <div class="bg-danger">
          <h4 class="text-white">Background danger</h4>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the class <code>bg-XXX</code> to the element.</p>
      <p>To avoid conflict with some pre existent <code>background-color</code> just add another <code>div</code> with the class.</p>
      <h4>When to use</h4>
      <p>Avoid change backgrounds to this colors, they should be used only for <b>main</b> actions and elements of a page.</p>
      <p>The most important elements that can need this colors already exist on the styleguide, like <b>buttons</b>, <b>labels</b>, <b>progress bars</b> and <b>panels</b>.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Light colors</h3>
    </div>
    <div class="col-xs-12 col-lg-8 text-center text-white">
      <div class="bs-component">
        <div class="bg-primary-light">
          <h4 class=" text-white">Background primary</h4>
        </div>
        <div class="bg-success-light">
          <h4 class="text-white">Background success</h4>
        </div>
        <div class="bg-info-light">
          <h4>Background info</h4>
        </div>
        <div class="bg-warning-light">
          <h4 class="text-white">Background warning</h4>
        </div>
        <div class="bg-danger-light">
          <h4 class="text-white">Background danger</h4>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the class <code>bg-XXX-light</code> to the element.</p>
      <p>To avoid conflict with some pre existent <code>background-color</code> just add another <code>div</code> with the class.</p>
      <h4>When to use</h4>
      <p>Use this colors to <b>highlight</b> some information, like words or phases, etc.</p>
      <p>The most important elements that can need this colors already exist on the styleguide, like <b>rows in tables</b>, <b>alerts</b>, <b>disabled buttons</b> and <b>list itens</b>.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Grid ============================================================ -->
<!-- =================================================================== -->
## Grid
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Grid System</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="show-grid">
          <div class="row">
            <div class="col-xs-12">
              <code>.col-xs-12</code>
              <br>
              <br>
            </div>
            <div class="col-xs-6">
              <code>.col-xs-6</code>
              <br>
              <br>
            </div>
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
            <div class="col-xs-3">
              <code>.col-xs-3</code>
              <br>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>To see the grid, use the class <code>.show-grid</code> on the <code>body</code> tag or on the area that you wanna check.</p>
      <p>Always, check if has a <code>container</code> with a <code>row</code> and <code>col-XXX-nr</code>.</p>
      <p>If you need split columns, add a new <code>row</code>.</p>
      <p>Use the <b>mobile first</b> aproach, to create pages and to organize the order of classses in HTML.</p>
      <h4>When to use</h4>
      <p><strong>All</strong> elements and components should be inserted inside a <code>col-XXX-nr</code></p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Typography========================================================= -->
<!-- =================================================================== -->
## Typography
<article>
  <div class="row">
    <div class="col-xs-12 ">
      <h3 class="bs-component-title">Header with tags or classes</h3>
    </div>
    <div class="col-xs-12 col-lg-4">
      <div class="bs-component">
        <h1>Heading 1</h2>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <div class="bs-component">
        <div class="h1">Heading 1 <small>subtitle</small> </div>
        <div class="h2">Heading 2 <small>subtitle</small> </div>
        <div class="h3">Heading 3 <small>subtitle</small> </div>
        <div class="h4">Heading 4 <small>subtitle</small> </div>
        <div class="h5">Heading 5 <small>subtitle</small> </div>
        <div class="h6">Heading 6 <small>subtitle</small> </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the tag <code>heading</code> with the right <code>font-size</code> or add the class <code>hXX</code>.</p>
      <p>To add subtitle or helper text, add a <code>small</code> tag <b>inside</b> the heading element</p>
      <p>The tag can be a <code>heading</code> or any other element.</p>
      <h4>When to use</h4>
      <p>Try to use only one <code>h1</code> for each page. If you need <b>visually</b> more than one, use the class in other level of heading</p>
      <p>For main titles of the page, prefer to use the component <a href="#page-header">Page Header</a></p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Examples body text</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p class="lead">text lead, with bigger font.</p>
        <p>The following snippet of text is the default paragraph.</p>
        <p>The following snippet of text is the default paragraph with a <a href="">link</a>.</p>
        <p>The following snippet of text is <mark>hilighted</mark>.</p>
        <p>The following snippet of text is <del>deleted</del>.</p>
        <p>The following snippet of text is <s>Strikethrough</s>.</p>
        <p>The following snippet of text is <ins>inserted</ins>.</p>
        <p>The following snippet of text is <u>underlined</u>.</p>
        <p>The following snippet of text is <small>small</small>.</p>
        <p>The following snippet of text is <strong>bold</strong>.</p>
        <p>The following snippet of text is <em>italic</em>.</p>
        <p>The following snippet of text is <abbr title="attribute">abbreviation</abbr>.</p>
        <p><span class="initialism">The following snippet</span> of text has a smaller text on start.</p>
        <p>The following snippet of text is a code <code>&lt;section&gt;</code>.</p>
        <p>The following snippet of text is a keyboard instruction <kbd>cd</kbd>.</p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add regular HTML texts tags</p>
      <p><strong>Avoid</strong> create exceptions and custom <code>css styles</code> fo texts </p>
      <p>All the texts shopuld be insertd inside <code>text tags</code>.</p>
      <h4>When to use</h4>
      <p>For every text, prefer to use the regular elements and default texts.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Emphasis classes / text colors</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
        <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <p class="text-white bg-warning">Text white Etiam porta sem malesuada magna mollis euismod.</p>
        <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the class <code>text-XXX</code> to the element.</p>
      <p>To avoid conflict with some pre existent <code>text-color</code> just add another <code>div</code> with the class.</p>
      <h4>When to use</h4>
      <p>Use this colors to highlight some information, or giv feedback to the user.</p>
      <p>The most important elements that can need this colors already exist on the styleguide, like <b>error messages</b>, <b>titles</b>, <b>input label states</b> and <b>alert texts</b>.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Transformation text classes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p class="text-lowercase">Lowercased text.</p>
        <p class="text-uppercase">Uppercased text.</p>
        <p class="text-capitalize">Capitalized text.</p>
        <h2>Main title with <span class="text-uppercase">uppercase text</span></h2>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the proper classes to the text tag.</p>
      <p>Avoid add on parent elements, like add in the <code>panel</code> element, instead of the content of <code>panel</code></p>
      <p>To avoid conflict with some pre existent <code>cont-style</code>, add a extra <code>span</code> with the right class.</p>
      <h4>When to use</h4>
      <p>No specif rule, just try to avoid the default text styles of components.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Addresses</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <address>
              <strong>Company GmbH</strong><br>
              strret nr<br>
              ZIPCODE Berlin<br>
              <abbr title="Phone">P:</abbr>
              <a href="tel:#"> 0800 98089ut</a>
            </address>
        <address>
              <strong>Full Name</strong><br>
              <a href="mailto:#">first.last@example.com</a>
            </address>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just small snippet of code, no specic rule</p>
      <h4>When to use</h4>
      <p>Try do add this for any address reference, for better <b>SEO</b>.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Carets / triangle</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p>this need a caret <span class="caret"></span></p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add a <code>span</code> with the <code>caret</code> class.</p>
      <h4>When to use</h4>
      <p>This is part od <code>dropdown</code> elements.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Close button</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p>this needs a close button on right side
          <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
        </p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the snoped of code, as it is.</p>
      <h4>When to use</h4>
      <p>Use buttons for close <code>alerts</code> and <code>modals</code></p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Icons</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p>Use icons <strong>always</strong> in standlone elements, never mix icons with other classes</p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <h4>When to use</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Alignment classes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p class="text-left">Left aligned text.</p>
        <p class="text-center">Center aligned text.</p>
        <p class="text-right">Right aligned text.</p>
        <p class="text-justify">Justified text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe asperiores, quibusdam voluptatem nihil numquam esse ratione laborum ad, voluptatibus dolore earum molestiae optio eveniet unde. Quia doloribus vero libero nam.</p>
        <p class="text-nowrap">No wrap text.</p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the classes to components, but <b>do not</b> mix this with <code>columns</code>.</p>
      <h4>When to use</h4>
      <p>This classes are fot text only, no specific rules.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 id="type-blockquotes">Blockquotes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </blockquote>
        <blockquote class="blockquote-reverse">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </blockquote>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <p>Just add the components, with tle optional class to the right alignment, but <b>do not</b> mix this with <code>columns</code>.</p>
      <h4>When to use</h4>
      <p>This classes are fot text only, no specific rules.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 id="lists">Lists</h3>
    </div>
    <div class="col-xs-12">
      <h4>Unordered</h4>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Jus add plain <code>ul</code> markup</p>
      <h4>When to use</h4>
      <p>Check the type of contet, if is <b>unordered</b> list, when the order of the elements don't matter.</p>
    </div>
    <div class="col-xs-12">
      <h4>Ordered</h4>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ol>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ol>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Jus add plain <code>ol</code> markup</p>
      <h4>When to use</h4>
      <p>Check the type of contet, if is <b>ordered</b> list, when the order of the elements matter.</p>
    </div>
    <div class="col-xs-12">
      <h4>Unstyled</h4>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="list-unstyled">
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Jus add plain <code>ol</code> or <code>ul</code> markup</p>
      <p>Dont mix the <code>list-inline</code> with <code>list-unstyled</code>.</p>
      <h4>When to use</h4>
      <p>Choose the <code>ul</code> or <code>ol</code> based on the content, and if the layout requires, or the <b>bullets</b> and <b>numbers</b> are not needed, use the <b>unstyled</b> style.</p>
    </div>
    <div class="col-xs-12">
      <h4>Inline</h4>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="list-inline">
          <li>Phasellus </li>
          <li>Purus </li>
          <li>Vestibulum </li>
          <li>tristique</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Jus add plain <code>ol</code> or <code>ul</code> markup</p>
      <p>Dont mix the <code>list-inline</code> with <code>list-unstyled</code>.</p>
      <h4>When to use</h4>
      <p>Choose the <code>ul</code> or <code>ol</code> based on the content, and if the layout requires, or the <b>bullets</b> and <b>numbers</b> are not needed, use the <b>inline</b> style.</p>
    </div>
    <div class="col-xs-12">
      <h4>Definition lists</h4>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <dl class="dl-horizontal">
          <dt>Description lists</dt>
          <dd>A description list is perfect for defining terms.</dd>
          <dt>Euismod</dt>
          <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
          <dd>Donec id elit non mi porta gravida at eget metus.</dd>
          <dt>Malesuada porta</dt>
          <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
          <dt>Felis euismod semper eget lacinia</dt>
          <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
        </dl>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Jus add plain <code>definition list</code> markup with the <b>optional</b> class for horizontal layout.</p>
      <h4>When to use</h4>
      <p>Choose the <code>dl</code> if you have a list with scrict titles and descriptions. Add the <b>horizontal</b> layout to make more eradable.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Tables ============================================================ -->
<!-- =================================================================== -->
## Tables
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Basic table</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table">
          <caption>Optional table caption.</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Write basic markup, and try to use the elements <code>caption</code> with a short description of the table and <code>thead</code>, <code>tbody</code>, <code>th</code> and <code>td</code> for separation of header and content.</p>
      <h4>When to use</h4>
      <p>Use tables for what they are intented to, tabular data, or, organized data, with titles, and coparision of rows</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table with striped rows</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-striped">
          <caption>Optional table caption.</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for better visualization of rows.</p>
      <h4>When to use</h4>
      <p>Same as basic table.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table with borders</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for better visualization if mixed with other components in same page.</p>
      <h4>When to use</h4>
      <p>Same as basic table.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table with hover in rows</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for better visualization when interacting with the content of the table.</p>
      <p>We can add this behavior/class along with other classes, like class for striped rows.</p>
      <h4>When to use</h4>
      <p>Same as basic table, plus if we have too many rows, too many columns or need compare data.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table with colors in rows</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th>#</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="info">
              <td>3</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="success">
              <td>4</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="danger">
              <td>5</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="warning">
              <td>6</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr class="active">
              <td>7</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for some lines, based on states classes.</p>
      <h4>When to use</h4>
      <p>Same as basic table, with some rows with colors, based on state of the data, present or not in the table, for example, with an extra column "completed" or just the color, instead the text.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table with small rows</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-condensed">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for small table.</p>
      <h4>When to use</h4>
      <p>Use if you ahve a small table as part of other component, like detail, not if the table ins the main content of the page.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Table responsive</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as basic table, but with an extra class for small screens.</p>
      <p>This class just add horizontal scroll to the table on mobile devices.</p>
      <h4>When to use</h4>
      <p>Add this behavior if the table as too many columns, or if the content of some column as too many text.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Forms ============================================================= -->
<!-- =================================================================== -->
## Forms
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Inputs states</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form action="">
          <div class="row">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="control-label" for="focusedInput">Focused input</label>
                <input class="form-control" id="focusedInput" type="text" value="Click to focus on this...">
              </div>
              <div class="form-group">
                <label class="control-label" for="disabledInput">Disabled input</label>
                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">
              </div>
              <div class="form-group has-warning">
                <label class="control-label" for="inputWarning">Input warning</label>
                <input type="text" class="form-control" id="inputWarning">
                <span class="help-block">Warning help text</span>
              </div>
              <div class="form-group has-error">
                <label class="control-label" for="inputError">Input error</label>
                <input type="text" class="form-control" id="inputError">
                <span class="help-block">Error help text</span>
              </div>
              <div class="form-group has-success">
                <label class="control-label" for="inputSuccess">Input success</label>
                <input type="text" class="form-control" id="inputSuccess">
                <span class="help-block">Success help text</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Use the default property <code>autofocus</code> to set the initial focus to some field.</p>
      <p>Use the default property <code>disabled</code> to set disable some field.</p>
      <p>Add the class <code>has-STATE</code> to the <code>form-group</code> elelemnt, and the field and labels will follow the colors of the state.</p>
      <h4>When to use</h4>
      <p>Use the <code>autofocus</code> if the main purpose of the screen is fill the field.</p>
      <p>Use the <code>disabled</code> if we need to show to the user that some information is not changeable. If some information is not possible to change and the user dont need to know that, hide the information instead of show as non editable.</p>
      <p>The input states are emant to give feedback to the user: </p>
      <dl class="dl-horizontal">
        <dt class="text-warning">Warning</dt>
        <dd>If the field is <b>valid</b> but has some information (like, date of expiration too short)</dd>
        <dt class="text-danger">Danger</dt>
        <dd>If the field is <b>invalid</b> and prevents the form to be submited or save.</dd>
        <dt class="text-success">Success</dt>
        <dd>If the field is <b>valid</b> and ready to be submited or <b>re</b> submited.</dd>
      </dl>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Inputs sizes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form action="">
          <div class="row">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="control-label" for="inputLarge">Large input</label>
                <input class="form-control input-lg" type="text" id="inputLarge">
              </div>
              <div class="form-group">
                <label class="control-label" for="inputDefault">Default input</label>
                <input type="text" class="form-control" id="inputDefault">
              </div>
              <div class="form-group">
                <label class="control-label" for="inputSmall">Small input</label>
                <input class="form-control input-sm" type="text" id="inputSmall">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the class <code>input-SIZE</code> to the <code>input</code> element.</p>
      <h4>When to use</h4>
      <p>Use always the <b>default size</b>, change to bigger or smaller if the main action of the page is not a single form.</p>
      <p>Use small <code>input-sm</code> if the form ins inside another element, like a table.</p>
      <p>Use large <code>input-lg</code> if you have a form with few fields or inside a container with higher priority, like a modal.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Inputs group addons</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form action="">
          <div class="row">
            <div class="col-xs-12">
              <div class="form-group">
                <label class="control-label">Input prefix</label>
                <div class="input-group">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control">
                  <span class="input-group-btn">
                          <button class="btn btn-default" type="button">Button</button>
                        </span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label">Input prefix</label>
                <div class="input-group">
                  <input type="text" class="form-control">
                  <span class="input-group-addon">,00</span>
                  <span class="input-group-btn">
                          <button class="btn btn-default" type="button">Button</button>
                        </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add a <code>span</code> with the class <code>input-group-addon</code> just before or after the field.</p>
      <h4>When to use</h4>
      <p>Use the <b>add on</b> as helper to teh user, with something that can be part of the value, but dont need to be filled, because its a default value, like a currency symbol, default cents of a price, or country phone code.</p>
      <p>Avoid to use the add on as a <code>label</code> of the field.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Basic vertical form</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            <p class="help-block">Example block-level help text here.</p>
          </div>
          <div class="form-group">
            <label for="select1">select</label>
            <select class="form-control" id="select1">
                  <option>select</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="disabled1">Disabled field</label>
            <input type="password" class="form-control" id="disabled1" placeholder="Disabled field" disabled="">
          </div>
          <div class="form-group">
            <label for="disabled1">Readonly field</label>
            <input type="password" class="form-control" id="disabled1" placeholder="Readonly field" readonly="">
          </div>
          <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
          </div>
          <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"> inline
              </label>
          <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2"> checkbox
              </label>
          <div class="radio">
            <label>
                  <input type="radio" name="optionsRadiosA" id="optionsRadios1" value="option1" checked=""> Option one is this and that—be sure to include why it's great
                </label>
          </div>
          <div class="radio">
            <label>
                  <input type="radio" name="optionsRadiosA" id="optionsRadios2" value="option2"> Option two can be something else and selecting it will deselect option one
                </label>
          </div>
          <div class="checkbox">
            <label>
                  <input type="checkbox"> Check me out
                </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p><code>form-group</code> blocks without grid are displayed stacked, with vertical layout</p>
      <h4>When to use</h4>
      <p>Vertical forms should be used for long forms, when the form is the main action of the page.</p>
      <p>Prefer to write forms with the grid system.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Basic inline form</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form class="form-inline">
          <div class="form-group">
            <label class="sr-only" for="exampleInputEmail3">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
          </div>
          <button type="submit" class="btn btn-default">Send</button>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the class <code>form-inline</code> in the <code>form</code> element to display <code>form-groups</code> aligned horizontally, as text, without label.</p>
      <h4>When to use</h4>
      <p>Use for small forms, with one or two fields.</p>
      <p>Prefer to write forms with the grid system.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Basic horizontal form</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                      <input type="checkbox"> Remember me
                    </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the class <code>form-horizontal</code> in the <code>form</code> element to display <code>form-groups</code> as rows, with the label aligned to the field, on left side.</p>
      <h4>When to use</h4>
      <p>Same use as the default form, but limited to the sise of the label of the field.</p>
      <p>Prefer to write forms with the grid system.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Form with grid</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <form action="">
          <div class="row">
            <div class="col-xs-12 col-lg-4">
              <input type="text" class="form-control" placeholder="input">
            </div>
            <div class="col-xs-12 col-lg-4">
              <input type="text" class="form-control" placeholder="input">
            </div>
            <div class="col-xs-12 col-lg-2">
              <div class="form-group">
                <button type="submit" class="btn btn-default">Sign in</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Write thre grid first, and after this insert in each row the proper label or field.</p>
      <h4>When to use</h4>
      <p>Best aproach in most of the cases, because has betetr control in the small screens, better than juns stack / use the vertical form.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Buttons =========================================================== -->
<!-- =================================================================== -->
##Buttons
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Buttons default</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <a href="#" class="btn btn-default">Default</a>
        <a href="#" class="btn btn-primary">Primary</a>
        <a href="#" class="btn btn-success">Success</a>
        <a href="#" class="btn btn-info">Info</a>
        <a href="#" class="btn btn-warning">Warning</a>
        <a href="#" class="btn btn-danger">Danger</a>
        <a href="#" class="btn btn-link">Link</a>
        <br>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Use the button classes <code>btn btn-STATE</code> to set thebutton appearance to <code>button</code>, linka <code>a</code>, or other elements like <code>div</code> or span.</p>
      <h4>When to use</h4>
      <p>Choose the right state for the action, generally:</p>
      <dl class="dl-horizontal">
        <dt>btn-default</dt>
        <dd>Button without stae, for secondary actions</dd>
        <dt class="text-primary">btn-primary</dt>
        <dd>Main and desired action of the page or form. One for page/form</dd>
        <dt class="text-success">btn-success</dt>
        <dd>Use to give feedback about an action or confirm the main action.</dd>
        <dt class="text-info">btn-info</dt>
        <dd>Use for helper actions, like, open a tooltip with instructions.</dd>
        <dt class="text-warning">btn-warning</dt>
        <dd></dd>
        <dt class="text-danger">btn-danger</dt>
        <dd>Action that can be undone, like delete, reset.</dd>
        <dt>btn-link</dt>
        <dd>Button as text</dd>
      </dl>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Buttons disabled</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <a href="#" class="btn btn-default disabled">Default</a>
        <a href="#" class="btn btn-primary disabled">Primary</a>
        <a href="#" class="btn btn-success disabled">Success</a>
        <a href="#" class="btn btn-info disabled">Info</a>
        <a href="#" class="btn btn-warning disabled">Warning</a>
        <a href="#" class="btn btn-danger disabled">Danger</a>
        <a href="#" class="btn btn-link disabled">Link</a>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>add the <code>disabled</code> class to any <code>button-STATE</code> to show the light version/.</p>
      <h4>When to use</h4>
      <p>Use for disabed buttons, when the action is disable, like, after the user already press the button, or need to fill some field before</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Buttons dropdowns</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="btn-toolbar" style="margin: 0;">
          <div class="btn-group">
            <a href="#" class="btn btn-default">Default</a>
            <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-primary">Primary</a>
            <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-success">Success</a>
            <a href="#" class="btn btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-info">Info</a>
            <a href="#" class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-warning">Warning</a>
            <a href="#" class="btn btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Create a button group with two links <b>with</b> the <code>btn btn-STATE</code> class, followed by a list with <code>dropdown-menu</code>.</p>
      <h4>When to use</h4>
      <p>Use whe the user has to choose the sub action, for example a "Delete" button, with subaction "Delete all" and "Delete this".</p>
      <p>Avoid mix diferent types of actions inside the same dropdoww, like "Save" and "Delete".</p>
      <p>Avoid to use the dropdow as a menu.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Buttons sizes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <a href="#" class="btn btn-primary btn-lg">Large button</a>
        <a href="#" class="btn btn-primary">Default button</a>
        <a href="#" class="btn btn-primary btn-sm">Small button</a>
        <a href="#" class="btn btn-primary btn-xs">Mini button</a>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the size button class with the button state classes <code>btn btn-STATE btnSIZE</code>.</p>
      <h4>When to use</h4>
      <p>Prefer to use the default size, change the size to follow the size of the form, with the same rules as the <b>input sizes</b>.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Block buttons</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <a href="#" class="btn btn-default btn-lg btn-block">Block level button</a>
        <br>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <a href="#" class="btn btn-info btn-lg btn-block">Block level in grid</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>btn-block</code> class to force the button to behave like a block, using the full width.</p>
      <p>This classe works well when you yse buttons inside cols of the grid</p>
      <h4>When to use</h4>
      <p>Use with the grid to controll better how the button is displayed in slall screens or if yopu need large buttons in bigger screens too.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Button Group</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="btn-group">
          <a href="#" class="btn btn-default">Left</a>
          <a href="#" class="btn btn-default">Middle</a>
          <a href="#" class="btn btn-default">Right</a>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-xs btn-default" aria-label="Bold">
                <span class="glyphicon glyphicon-bold"></span>
              </button>
          <button type="button" class="btn btn-xs btn-default" aria-label="Italic">
                <span class="glyphicon glyphicon-italic"></span>
              </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Wrap regular buttons inside a element with <code>btn-group</code>.</p>
      <h4>When to use</h4>
      <p>Use to create groups of buttons with similar behavior, like pagination, or texts controls (bold / italic)</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Button Group Justified</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="btn-group btn-group-justified">
          <a href="#" class="btn btn-default">Left</a>
          <a href="#" class="btn btn-default">Middle</a>
          <a href="#" class="btn btn-default">Right</a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Same as <b>Button Group</b> with an extra class <code>btn-group-justified</code>.</p>
      <h4>When to use</h4>
      <p>Use to make a <code>btn-group</code> use the full width, to make the actions more visible.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Button toolbar</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="btn-toolbar">
          <div class="btn-group">
            <a href="#" class="btn btn-default">1</a>
            <a href="#" class="btn btn-default">2</a>
            <a href="#" class="btn btn-default">3</a>
            <a href="#" class="btn btn-default">4</a>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-default">5</a>
            <a href="#" class="btn btn-default">6</a>
            <a href="#" class="btn btn-default">7</a>
          </div>
          <div class="btn-group">
            <a href="#" class="btn btn-default">About</a>
            <div class="btn-group">
              <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Dropdown
                    <span class="caret"></span>
                  </a>
              <ul class="dropdown-menu">
                <li><a href="#">Dropdown link</li>
                    <li><a href="#">Dropdown link</li>
                    <li><a href="#">Dropdown link</li>
                  </ul>
                </div>
              </div>
            </div>
            <br>
            <div class="btn-toolbar">
              <div class="btn-group">
                <a href="#" class="btn btn-default">8</a>
                  <div class="btn-group">
                    <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    File
                    <span class="caret"></span>
                  </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Export PDF</a></li>
                      <li><a href="#">EXPORT DOC</a></li>
                      <li><a href="#">Save</a></li>
                    </ul>
                  </div>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-default" aria-label="Bold">
                  <span class="glyphicon glyphicon-bold"></span>
                </button>
              <button type="button" class="btn btn-default" aria-label="Italic">
                  <span class="glyphicon glyphicon-italic"></span>
                </button>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-default" aria-label="Italic">
                  <span class="glyphicon glyphicon glyphicon-align-left"></span>
                </button>
              <button type="button" class="btn btn-default" aria-label="Italic">
                  <span class="glyphicon glyphicon glyphicon-align-center"></span>
                </button>
              <button type="button" class="btn btn-default" aria-label="Italic">
                  <span class="glyphicon glyphicon glyphicon-align-right"></span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-4">
        <h4 class="doc-info-title">How to use</h4>
        <p>Wrap a set of <code>btn-group</code> indide a element with the class <code>btn-toolbar</code>.</p>
        <p>You can add a <code>dropdown too.</code></p>
        <h4>When to use</h4>
        <p>Use when you have to group other groups of <code>btn-group</code> with related actions, for example, group two lists of actiosn related to soem etxt editor, firs with <b>bold</b>, <b>italic</b>, and other with <b>align left</b>, <b>align center</b> and <b>align right</b>. </p>
      </div>
      <div class="col-xs-12">
        <h3 class="bs-component-title">Button group vertical</h3>
      </div>
      <div class="col-xs-12 col-lg-8">
        <div class="bs-component">
          <div class="btn-group-vertical">
            <a href="#" class="btn btn-default">Button</a>
            <a href="#" class="btn btn-default">Button</a>
            <a href="#" class="btn btn-default">Button</a>
            <a href="#" class="btn btn-default">Button</a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-4">
        <h4 class="doc-info-title">How to use</h4>
        <p>Wrap the buttons inside a <code>btn-group-vertical</code> element.</p>
        <h4>When to use</h4>
        <p>Group buttons and actions with similar actions, stacked to fit the layout, or only for small screens.</p>
      </div>
    </div>
</article>
<!-- =================================================================== -->
<!-- Images ============================================================ -->
<!-- =================================================================== -->
## Images
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="images">Images</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Image shapes</h3>
    </div>
    <div class="col-xs-12 col-lg-2">
      <h4 class="bs-component-title">Rounded</h4>
      <div class="bs-component">
        <img src="https://placeimg.com/100/100/any" alt="..." class="img-rounded">
      </div>
    </div>
    <div class="col-xs-12 col-lg-2">
      <h4 class="bs-component-title">Circle</h4>
      <div class="bs-component">
        <img src="https://placeimg.com/101/101/any" alt="..." class="img-circle">
      </div>
    </div>
    <div class="col-xs-12 col-lg-2">
      <h4 class="bs-component-title">Thumbnail</h4>
      <div class="bs-component">
        <img src="https://placeimg.com/102/102/any" alt="..." class="img-thumbnail">
      </div>
    </div>
    <div class="col-xs-12 col-lg-offset-2 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>add the class <code>img-rounded</code>, <code>img-circle</code>or <code>img-thumbnail</code> to the image tag.</p>
      <p>The appearance is changed only by the rounded or with border, the classes dont change the size, so we can use class <code>img-thumbnail</code> to apply border in a large image.</p>
      <h4>When to use</h4>
      <p>No spoecific rules.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Position ========================================================== -->
<!-- =================================================================== -->
## Position
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Floats</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="row">
          <div class="col-xs-12">
            <div class="pull-left">
              <div class="bg-warning">This goes to left</div>
            </div>
            <div class="pull-right">
              <div class="bg-warning">This goes to right</div>
            </div>
            <div class="center-block bg-warning" style="width: 200px">
              This block goes to center
              <br> Not the text!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the classes to components, but <b>do not</b> mix this with <code>columns</code>.</p>
      <p>Dont use to fload a position a column.</p>
      <h4>When to use</h4>
      <p>This classes are fot blocks only, no specific rules.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Show and Hide ===================================================== -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="show-and-hide">Show and Hide elements</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Visible / Invisible elements</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <p>3 divs bellow, two hidden, one visible</p>
        <div class="show">Visible with <code>.show</code>
        </div>
        <div class="hidden">Invisible with <code>.hidden</code>
        </div>
        <span class="invisible">Invisible with <code>.invisible</code></span> « Something invisible here!
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the class <code>show</code>, <code>hidden</code>or <code>invisible</code> to the element. </p>
      <p><code>invisible</code> class change the visibility, not the <code>display</code> type, so the element still using space on the screen.</p>
      <h4>When to use</h4>
      <p>Use show/hidden to make elements lvisible/unvisible to the user, <b>only</b> if the element visibility can be toggled without reload. If the element never will be visible, the element should be not present on the HTML.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Visible only to screen readers</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        Something invisible here!
        <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>With the class <code>sr-only</code> you can make shortcuts for screenreaders.</p>
      <h4>When to use</h4>
      <p>Use to hide something, like a menu, to teh regular users, and add a shortuct or message to the users using screen readers.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Image replacement</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        Phrase » <span class="text-hide"><img src="../assets/helsinki-logo-black.svg" width="150px" /></span> « with some text hidden
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>With the class <code>text-hide</code> you can hide texts inside elements and keep the images or other elements.</p>
      <h4>When to use</h4>
      <p>use to hide image descriptions, like in logos.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Responsive ========================================================= -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="responsive">Responsive and Print classes</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <h3 class="bs-component-title">Classes to hide/show based on screen size</h3>
      <p>To <strong>show</strong> some element <strong>only</strong> for one screen size, use the classes <code>.visible-XX-*</code> </p>
      <p>To <strong>hide</strong> some element <strong>only</strong> for one screen size, use the classes <code>.hidden-XX-*</code> </p>
      <p>For both types of classes, you can choose the display type, with the last part of the class name, using</p>
      <dl class="dl-horizontal">
        <dt><code>.visible-*-block</code></dt>
        <dd>display: block;</dd>
        <dt><code>.visible-*-inline</code></dt>
        <dd>display: inline;</dd>
        <dt><code>.visible-*-inline-block</code></dt>
        <dd>display: inline-block;</dd>
      </dl>
      <p>
        The same behavior works for hide/print with the Drop
        <code>.visible-print-block</code>
        <code>.visible-print-inline</code>
        <code>.visible-print-inline-block</code>
      </p>
      <div class="bs-component">
        <p class="visible-xs-block">Visible as block on small screens only</p>
        <p class="visible-lg-block">Visible as block on big screens</p>
        <p class="visible-xs-inline">Visible as inline on small screens only</p>
        <p class="visible-lg-inline">Visible as inline on big screens</p>
        <p class="visible-print-block">Visible as block for print only</p>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h3 class="bs-component-title">How to use</h3>
      <p>Add the class <code>visible-SIZE-DISPLAY</code> to the element to hide in a specifi screen size.</p>
      <h4>When to use</h4>
      <p>You can use this classes just to show/hide some element like a banner that should be visible only on mobile, for example, or duplicate content, with diffent layouts based on screel size, for example:</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Dropdown ========================================================== -->
<!-- =================================================================== -->
##Dropdown
<article>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span class="caret"></span>
              </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li><a href="#">Separated link</a>
            </li>
          </ul>
        </div>
        <br>
        <div class="dropup">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropup
                <span class="caret"></span>
              </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li><a href="#">Separated link</a>
            </li>
          </ul>
        </div>
        <br>
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown with header inside
                <span class="caret"></span>
              </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li class="dropdown-header">Dropdown header</li>
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li><a href="#">Something else here</a>
            </li>
            <li><a href="#">Separated link</a>
            </li>
          </ul>
        </div>
        <br>
        <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown with divider inside
                <span class="caret"></span>
              </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li class="dropdown-header">Dropdown header 2</li>
            <li><a href="#">Action</a>
            </li>
            <li><a href="#">Another action</a>
            </li>
            <li role="separator" class="divider"></li>
            <li class="dropdown-header">Dropdown header 2</li>
            <li><a href="#">Something else here</a>
            </li>
            <li><a href="#">Separated link</a>
            </li>
          </ul>
        </div>
        <br>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Inside a <code>dropdown</code> wrapper, add a button (with a caret span inside), followed by a list with <code>dropdown-menu</code> class. </p>
      <p>To change the direction of open submenu, wrap with the class <code>dropup</code>.</p>
      <p>You can add a list header, inside the list <code>dropdown-menu</code>, adding the class <code>dropdown-header</code> to the list element.</p>
      <p>You can add a list divider, inside the list <code>dropdown-menu</code>, adding the class <code>divider</code> to the list element.</p>
      <h4>When to use</h4>
      <p>Use dropdows to create navigations grouped, like in <b>Buttons dropdowns</b>.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Navigation ============================================================ -->
<!-- =================================================================== -->
##Navigation
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Tabs</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="nav nav-tabs">
          <li class="active"><a href="#home" data-toggle="tab">Home</a>
          </li>
          <li><a href="#profile" data-toggle="tab">Profile</a>
          </li>
          <li class="disabled"><a>Disabled</a>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span class="caret"></span>
                  </a>
            <ul class="dropdown-menu">
              <li><a href="#dropdown1" data-toggle="tab">Action</a>
              </li>
              <li class="divider"></li>
              <li><a href="#dropdown2" data-toggle="tab">Another action</a>
              </li>
            </ul>
          </li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade active in" id="home">
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
          </div>
          <div class="tab-pane fade" id="profile">
            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
          </div>
          <div class="tab-pane fade" id="dropdown1">
            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
          </div>
          <div class="tab-pane fade" id="dropdown2">
            <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Create a list with the class <code>nav nav-tabs</code> with links to panel tab <b>IDs</b>.</p>
      <h4>When to use</h4>
      <p>Avoid create too many tabs, because they are not responsive, and break line in small screens</p>
      <p>You can use responsive visible classes to show the navigation as tabs on bigger screens and as <code>collapse</code> in small screens.</p>
    </div>
    <div class="col-xs-12">
      <h3 id="nav-pills">Pills Horizontal</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="nav nav-pills">
          <li class="active"><a href="#">Home</a>
          </li>
          <li><a href="#">Profile</a>
          </li>
          <li class="disabled"><a href="#">Disabled</a>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span class="caret"></span>
                  </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Create a list with the class <code>nav nav-pills</code>.</p>
      <h4>When to use</h4>
      <p>Use to create a navigation like tabs, but without the behavior of tabs, with hidden elements with content.</p>
      <p>You can use responsive visible classes to show the navigation as pills on bigger screens and as <code>collapse</code> or <b>Pills vertical</b> in small screens.</p>
    </div>
    <div class="col-xs-12">
      <h3 id="nav-pills">Pills vertical</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="nav nav-pills nav-stacked">
          <li class="active"><a href="#">Home</a>
          </li>
          <li><a href="#">Profile</a>
          </li>
          <li class="disabled"><a href="#">Disabled</a>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  Dropdown <span class="caret"></span>
                </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a>
              </li>
              <li><a href="#">Another action</a>
              </li>
              <li><a href="#">Something else here</a>
              </li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Create a list with the class <code>nav nav-pills nav-stacked</code>.</p>
      <h4>When to use</h4>
      <p>Use to create a navigation like tabs, but without the behavior of tabs, with hidden elements with content.</p>
      <p>You can use responsive visible classes to show the navigation as pills stacked on bigger screens and as <code>collapse</code> in small screens.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Navbar ============================================================ -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="doc-section-title" id="navbar">Navbar</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Default Navbar and Inverse navbar</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
              <a class="navbar-brand" href="#">Img</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">Link 1<span class="sr-only">(current)</span></a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action 1</a>
                    </li>
                    <li><a href="#">Action 2</a>
                    </li>
                    <li><a href="#">Action 3</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="#">Action 4</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="#">Action 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link 2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
              <a class="navbar-brand" href="#">Img</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">Link 1<span class="sr-only">(current)</span></a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action 1</a>
                    </li>
                    <li><a href="#">Action 2</a>
                    </li>
                    <li><a href="#">Action 3</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="#">Action 4</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="#">Action 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link 2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>navbar</code> class wrapper, and the content elements inside. </p>
      <p>Use the <code>navbar-toggle collapsed</code> to create the button to open the menu in small screens.</p>
      <p>Add the <code>navbar-inverse</code> to change the color.</p>
      <h4>When to use</h4>
      <p>Use in top o footer of the page, or both, with the main links and submenus</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Breadcrumbs ======================================================= -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="doc-section-title" id="breadcrumbs">Breadcrumbs</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="breadcrumb">
          <li class="active">Home</li>
        </ul>
        <ul class="breadcrumb">
          <li><a href="#">Home</a>
          </li>
          <li class="active">Library</li>
        </ul>
        <ul class="breadcrumb">
          <li><a href="#">Home</a>
          </li>
          <li><a href="#">Library</a>
          </li>
          <li class="active">Data</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just create a list with the <code>breadcrumb</code>.</p>
      <p>The last item, to the current page should be a plain text.</p>
      <h4>When to use</h4>
      <p>Add in all the pages, with the site map to teh current page.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Pagination ======================================================== -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <h2 class="doc-section-title" id="pagination">Pagination</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div>
          <ul class="pagination">
            <li class="disabled"><a href="#">«</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
        <div>
          <ul class="pagination pagination-lg">
            <li class="disabled"><a href="#">«</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
        <div>
          <ul class="pagination pagination-sm">
            <li class="disabled"><a href="#">«</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
        <div>
          <ul class="pagination pagination-sm pagination-plain">
            <li class="disabled"><a href="#">«</a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add a simple list with the <code>pagination class</code> and the class for size <code>pagination-SIZE</code> or style <code>pagination-STYLE</code>.</p>
      <h4>When to use</h4>
      <p>Try ti display pagination in top and footer of the lists, if the list is bigger than the size on screen.</p>
    </div>
    <div class="col-xs-12">
      <h3 id="pagination">Pager</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="pager">
          <li><a href="#">Previous</a> </li>
          <li><a href="#">Next</a> </li>
        </ul>
        <ul class="pager">
          <li class="previous disabled"><a href="#">← Older</a> </li>
          <li class="next"><a href="#">Newer →</a> </li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add a list with the <code>pager</code> class. To add the arrows, use the <code>previous</code> or <code>next</code> classes to the list item.</p>
      <h4>When to use</h4>
      <p>Try to use pagination with numbers, or the pagination plain, only with the links if not possible.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Indicators ======================================================== -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="indicators">Indicators</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Labels</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <span class="label label-default">Default</span>
        <span class="label label-primary">Primary</span>
        <span class="label label-success">Success</span>
        <span class="label label-warning">Warning</span>
        <span class="label label-danger">Danger</span>
        <span class="label label-info">Info</span>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add span element with the classes <code>label label-STATE</code>.</p>
      <p>Avoid mix the label classes with other classes.</p>
      <h4>When to use</h4>
      <p>Use to display <b>small texts</b>, informing the user about the state or counting of some item.</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Badges</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="nav nav-pills">
          <li class="active"><a href="#">Home <span class="badge">42</span></a></li>
          <li><a href="#">Profile <span class="badge"></span></a></li>
          <li><a href="#">Messages <span class="badge">3</span></a></li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add span element with the class <code>badge</code>.</p>
      <p>Avoid mix the label classes with other classes.</p>
      <h4>When to use</h4>
      <p>Use to display <b>small texts</b> or <b>numbers</b>, informing the user about the state or counting of some item.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Jumbotron ========================================================= -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="jumbotron">Jumbotron</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="jumbotron">
          <h1>Hello, world!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium in quo non libero quod autem dolor atque provident, necessitatibus expedita. Nam ipsam incidunt ut minus molestiae inventore blanditiis, quaerat ab?</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Use snimet of code aside, and change the content.</p>
      <p>Donr change the headings, for better appearance.</p>
      <h4>When to use</h4>
      <p>Use to create page or section headers, one per gape or section.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Page Header ======================================================= -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="page-header">Page header</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Default page header</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="page-header">
          <h1>Example page header <small>Subtext for header</small></h2>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Use a title with the <code>page-header</code> wrapper.</p>
      <h4>When to use</h4>
      <p>Use to create page or section headers.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Custom elements =================================================== -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="page-header">Custom elements</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="thumbnail"> <img data-src="holder.js/100%x200" alt="100%x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU1MTZiYmYyNGUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTUxNmJiZjI0ZSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 200px; width: 100%; display: block;">
              <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="thumbnail"> <img data-src="holder.js/100%x200" alt="100%x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU1MTZiYmVlYzkgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTUxNmJiZWVjOSI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true" style="height: 200px; width: 100%; display: block;">
              <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>The example is a simple use case of different components together, using the grid.</p>
      <h4>When to use</h4>
      <p>No specific rule.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Alerts ============================================================ -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="alerts">Alerts</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="alert alert-dismissible alert-warning">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <h4>Warning!</h4>
          <p>Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
        <div class="alert alert-dismissible alert-danger">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
        </div>
        <div class="alert alert-dismissible alert-success">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
        </div>
        <div class="alert alert-dismissible alert-info">
          <button type="button" class="close" data-dismiss="alert">×</button>
          <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>alert</code> to the wrapper element, with the style class, <code>alert-STYLE</code></p>
      <p>You can add button to close, with the markup and the class <code>alert-dismissible</code> on the wrapper element.</p>
      <p>To add titles, add the headings or use the element <code>strong</code>.</p>
      <h4>When to use</h4>
      <p>Use to give feedback to the user, about an action.</p>
      <p>Avoid use as simple box, with form or any other content inside.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Progress bars ===================================================== -->
<!-- =================================================================== -->
<article>
  <div class="row">
    <div class="col-xs-12">
      <div class="page-header">
        <h2 class="doc-section-title" id="progress-bars">Progress bars</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 id="progress-basic">Basic</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="progress">
          <div class="progress-bar" style="width: 60%;"></div>
        </div>
      </div>
      <h3 id="progress-label">With label</h3>
      <div class="bs-component">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em;">
            0%
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
            60%
          </div>
        </div>
      </div>
      <h3 id="progress-animated">Animated</h3>
      <div class="bs-component">
        <div class="progress progress-striped active">
          <div class="progress-bar" style="width: 45%"></div>
        </div>
      </div>
      <h3 id="progress-stacked">Stacked</h3>
      <div class="bs-component">
        <div class="progress">
          <div class="progress-bar progress-bar-success" style="width: 35%"></div>
          <div class="progress-bar progress-bar-warning" style="width: 20%"></div>
          <div class="progress-bar progress-bar-danger" style="width: 10%"></div>
        </div>
      </div>
      <h3 id="progress-alternatives">Contextual alternatives</h3>
      <div class="bs-component">
        <div class="progress">
          <div class="progress-bar progress-bar-info" style="width: 20%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-success" style="width: 40%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-warning" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-danger" style="width: 80%"></div>
        </div>
      </div>
      <h3 id="progress-striped">Striped</h3>
      <div class="bs-component">
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-info" style="width: 20%"></div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-success" style="width: 40%"></div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-warning" style="width: 60%"></div>
        </div>
        <div class="progress progress-striped">
          <div class="progress-bar progress-bar-danger" style="width: 80%"></div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add a element <code>progress-bar</code> wiyth a inline width, inside a a <code>progress wrapper</code>.</p>
      <p>To show the value of the bar, add the text inside the codw progress-bar.</p>
      <p>To animate the <code>progress-bar</code> add the class <code>progress-striped</code> to the wrapper.</p>
      <p>Use <code>progress-bar-STATE</code> to change the color os the bars.</p>
      <p>The <code>progress</code> accepst multiple bars inside, use diferent colors, like <code>progress-STYLE</code> do make visible, and care with the order of elements to make all visible.</p>
      <h4>When to use</h4>
      <p>Use to show progress of some complex operation, like multiple page form, or duration of some operation.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Media object ====================================================== -->
<!-- =================================================================== -->
##Media object
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Default</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component" data-example-id="default-media">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiOWQ1NiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmI5ZDU2Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJjMDJlMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmMwMmUyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiOWRiNSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmI5ZGI1Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Nested media heading</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          </div>
        </div>
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </div>
          <div class="media-right">
            <a href="#">
              <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJjMTQyZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmMxNDJmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
            </a>
          </div>
        </div>
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiYzdkZSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmJjN2RlIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </div>
          <div class="media-right">
            <a href="#">
              <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiZWFkOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmJlYWQ5Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the wrapper <code>media</code> with the content, and the right classes to position the media/image</p>
      <h4>When to use</h4>
      <p>No specific rule</p>
    </div>
    <div class="col-xs-12">
      <h3 class="bs-component-title">Media alignment</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component" data-example-id="media-alignment">
        <div class="media">
          <div class="media-left">
            <a href="#"> <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiZGU2ZiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmJkZTZmIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;"> </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Top aligned media</h4>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
        <div class="media">
          <div class="media-left media-middle">
            <a href="#"> <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJjMDkzNyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmMwOTM3Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;"> </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Middle aligned media</h4>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
        <div class="media">
          <div class="media-left media-bottom">
            <a href="#"> <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTUxNmJiZjgwNiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTE2YmJmODA2Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true" style="width: 64px; height: 64px;"> </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Bottom aligned media</h4>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the wrapper <code>media</code> with the content, and the right classes to position the media/image</p>
      <h4>When to use</h4>
      <p>No specific rule</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Containers ======================================================== -->
<!-- =================================================================== -->
##Containers
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">List groups</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="badge">14</span> Cras justo odio
          </li>
          <li class="list-group-item">
            <span class="badge">2</span> Dapibus ac facilisis in
          </li>
          <li class="list-group-item disabled">
            <span class="badge">1</span> Disabled item
          </li>
          <li class="list-group-item">
            <span class="badge">1</span> Morbi leo risus
          </li>
          <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
          <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
          <li class="list-group-item list-group-item-warning">
            Porta ac consectetur ac
            <span class="badge">1</span> Morbi leo risus
          </li>
          <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>list-group</code> to the <code>ul</code> element and <code>list-group-item</code> to each list item element</p>
      <h4>When to use</h4>
      <p>Use for show lists with states for itens</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 ">
      <h3 class="bs-component-title">List groups links</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="list-group">
          <a href="#" class="list-group-item active">Cras justo odio</a>
          <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
          <a href="#" class="list-group-item disabled">Disabled item</a>
          <a href="#" class="list-group-item">Morbi leo risus</a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>list-group</code> to the <code>div</code> element and <code>list-group-item</code> to each link.</p>
      <h4>When to use</h4>
      <p>Use to display links as a stacked list, like menus, with or without states</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">List groups content</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-info">
            <h4 class="list-group-item-heading">List group item heading</h4>
            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </a>
          <a href="#" class="list-group-item active">
            <h4 class="list-group-item-heading">List group item heading</h4>
            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </a>
          <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">List group item heading</h4>
            <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          </a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Like the regular <code>list-group</code>, but with complex content.</p>
      <h4>When to use</h4>
      <p>The same as <code>list-group</code>, but avoid content too large inside.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Panels ============================================================ -->
<!-- =================================================================== -->
##Panels
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Basic</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="panel panel-default">
          <div class="panel-body">
            Basic panel strong without title
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">Panel heading</div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Panel heading with strong title</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-body">
            Panel content
          </div>
          <div class="panel-footer">Panel footer</div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <h4>When to use</h4>
      <p>Add the class <code>panel panel-default</code> to the div, and the elements <code>panel-heading</code>, <code>panel-footer</code>, optionals, and <code>panel-body</code>.</p>
      <h4>When to use</h4>
      <p>Use to cerate areas of content, avoid add states to panels, of the content is too big, like a form.</p>
      <p>Avoid stacked panels.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">With content</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Panel with table</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Panel with list group</h3>
          </div>
          <div class="panel-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et atque vitae veniam deleniti, dolorem natus tempora sit mollitia ipsum porro eligendi, voluptatibus voluptatem nostrum nihil doloribus dolorum cum corporis recusandae.
          </div>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <h4>When to use</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3>Panels with states</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Panel primary</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Panel success</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">Panel warning</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">Panel danger</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">Panel info</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the class <code>panel panel-STATE</code> to the div, and the elements <code>panel-heading</code>, optional, and <code>panel-body</code>.</p>
      <h4>When to use</h4>
      <p>Use to cerate areas of content, avoid add states to panels, of the content is too big, like a form.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Wells ============================================================ -->
<!-- =================================================================== -->
##Wells
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Well sizes</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="well">
          Look, I'm in a well!
        </div>
        <div class="well well-sm">
          Look, I'm in a small well!
        </div>
        <div class="well well-lg">
          Look, I'm in a large well!
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Just add the <code>well</code> class the element.</p>
      <h4>When to use</h4>
      <p>Use to display any static information to the user.</p>
      <p>Avoid add too many content inside, like forms. Try to use as information box only, like the alerts.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Dialogs =========================================================== -->
<!-- =================================================================== -->
##Dialogs
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Modals</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#regularModal">
              Open modal
            </button>
        <div class="modal fade" id="regularModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                      </button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                Modal content
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#smallModal">
                Open small modal
              </button>
        <div class="modal fade" id="smallModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                      </button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                Modal content
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#largeModal">
                Open large modal
              </button>
        <div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                      </button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                Modal content
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Copy the code snippet aside, check if has the corrects IDs and buttons to close.</p>
      <p>Use the areas with the right content, titles, body and <b>footer</b> for actions and buttons.</p>
      <h4>When to use</h4>
      <p>Use modals to show adtional informations, confirm actions </p>.
      <p>Avoid use modals to display forms or any main task to the user.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Popovers</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-title="Title popover" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Left</button>
        <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Top</button>
        <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Bottom</button>
        <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Right</button>
        <script>
          $(function() {
            $('[data-toggle="popover"]').popover()
          })
        </script>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <h4>When to use</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Tooltips</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Top</button>
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Right</button>
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Bottom</button>
        <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Left</button>
        <script>
          $(function() {
            $('[data-toggle="tooltip"]').tooltip()
          })
        </script>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the property <code>data-toggle="tooltip"</code> to any element and the properties, optional, <code>data-placement</code> and <code>data-original-title</code>.</p>
      <h4>When to use</h4>
      <p>Use to display tiny informations and feedbacks to the user. The information of tooltips sjould not be required to complete any task.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Collapse ========================================================== -->
<!-- =================================================================== -->
##Collapse
<article>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Simple collapsible element</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Link with href
              </a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button>
        <div class="collapse" id="collapseExample">
          <div class="well">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum a excepturi nobis quos, fugit nihil, dolores consectetur neque atque illo molestias reiciendis itaque, iste ratione et ullam suscipit quam minima.
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the property <code>data-toggle="collapse"</code> to the link, with the <code>href</code> or <code>data-target=</code> with the ID of the collapsible element.</p>
      <h4>When to use</h4>
      <p>Use to display extra information, like the toltips.</p>
      <p>Avoid use collapsible elements mandatory to complete some action.</p>
      <p>Use as external controller to <code>collapse</code>.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <h3 class="bs-component-title">Accordeon</h3>
    </div>
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Collapsible Group Item #1
                      </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Collapsible Group Item #2
                      </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
              <h4 class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                      </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Add the <code>panel</code> wrapper with the <code>panel-heading</code> and <code>panel-collapse</code> and add the unique IDs.</p>
      <p>Use the code snipet</p>
      <h4>When to use</h4>
      <p>Use for information and fors splited by steps or groups of type of information, when is mandatory show only one step at each time.</p>
      <p>You can use the <code>collapse</code> as a small screen alternative to the regular <code>tabs</code> navigation.</p>
    </div>
  </div>
</article>
<!-- =================================================================== -->
<!-- Carousel ========================================================== -->
<!-- =================================================================== -->
##Carousel
<article>
  <div class="row">
    <div class="col-xs-12 col-lg-8">
      <div class="bs-component">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <img src="https://placeimg.com/600/301/any" alt="...">
              <div class="carousel-caption">
                <h3>Title</h3>
                <p>paragraph</p>
              </div>
            </div>
            <div class="item">
              <img src="https://placeimg.com/600/302/any" alt="...">
              <div class="carousel-caption">
                ...
              </div>
            </div>
            ...
          </div>
          <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-4">
      <h4 class="doc-info-title">How to use</h4>
      <p>Copy the example of code, above. You can use as full row in your page or inside a smaller column.</p>
      <p>Add a <code>container</code> inside the content of slides and wrap the <code>carousel-control</code> if necessary.</p>
      <p>Use images with the right size, avoid strech images.</p>
      <h4>When to use</h4>
      <p><s>Dont use.</s>.</p>
    </div>
  </div>
</article>
<footer>
  <div class="row">
    <div class="col-xs-12">
      <p>Based on <a href="http://getbootstrap.com" rel="nofollow">Bootstrap</a>. Icons from <a href="http://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="http://www.google.com/webfonts" rel="nofollow">Google</a>.</p>
    </div>
  </div>
</footer>
<div id="nav_doc">
  <ul class="nav nav-pills nav-stacked">
  </ul>
</div>