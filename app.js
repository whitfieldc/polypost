document.querySelector('#tmpl');
tmpl.heading = "My Polymer Binding";
tmpl.selected = 0;

tmpl.addEventListener('template-bound', function(){
  console.log(document.querySelector('core-menu'));
});