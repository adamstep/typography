var styles = {
    headline : {},
    byline   : {},
    dateline : {},
    body     : {},
};

var text = [
  {
    headline: 'Magna enim magna excepteur exercitation non dolore consequat ea.',
    byline: 'by Adam Stepinski',
    dateline: 'Dec 20, 2015',
    body: 'Occaecat pariatur consectetur enim enim reprehenderit Lorem deserunt cillum nulla amet consectetur commodo deserunt aliquip. Commodo cillum dolore labore dolor occaecat. Ea amet ut cupidatat exercitation consequat laborum dolore. Sunt commodo consectetur adipisicing mollit aute excepteur consequat sunt nisi culpa laborum ullamco anim commodo. Reprehenderit et ut enim labore excepteur cillum non qui enim consequat. Nostrud sint id cupidatat veniam eu esse tempor sint aliqua Lorem exercitation.',
    styles: styles,
  },
  {
    headline: 'Labore ad amet elit.',
    byline: 'by Adam Stepinski',
    dateline: 'Dec 20, 2015',
    body: 'Dolore pariatur voluptate non aliquip tempor do pariatur ex ut sunt. Adipisicing veniam qui excepteur ad et. Dolore est magna deserunt aute ullamco voluptate sit. Irure eiusmod elit est et anim eu sit est adipisicing voluptate duis proident. Anim aute et minim Lorem proident. Officia sint minim adipisicing aliqua incididunt.',
    styles: styles,
  }
];

var typefaces = [
  {label: "Lato", value: "Lato"},
  {label: "Roboto Condensed", value: "Roboto Condensed"},
  {label: "Source Sans Pro", value: "Source Sans Pro"},
  {label: "Montserrat", value: "Montserrat"},
  {label: "Lora", value: "Lora"},
  {label: "PT Sans", value: "PT Sans"},
  {label: "Merriweather", value: "Merriweather"},
  {label: "Noto Sans", value: "Noto Sans"},
  {label: "PT Serif", value: "PT Serif"},
  {label: "Fira Sans", value: "Fira Sans"},
  {label: "Vollkorn", value: "Vollkorn"},
  {label: "Libre Baskerville", value: "Libre Baskerville"},
  {label: "Signika", value: "Signika"},
  {label: "Alegreya", value: "Alegreya"},
  {label: "Crimson Text", value: "Crimson Text"},
  {label: "Merriweather Sans", value: "Merriweather Sans"},
  {label: "Karla", value: "Karla"},
  {label: "Josefin Slab", value: "Josefin Slab"},
  {label: "Alegreya Sans", value: "Alegreya Sans"},
  {label: "Economica", value: "Economica"},
  {label: "Gentium Book Basic", value: "Gentium Book Basic"},
  {label: "Gentium Basic", value: "Gentium Basic"},
  {label: "Inconsolata", value: "Inconsolata"},
  {label: "Source Code Pro", value: "Source Code Pro"},
  {label: "Roboto Mono", value: "Roboto Mono"},
  {label: "Fira Mono", value: "Fira Mono"},
];


function typefaceOption(t) {
    return '<span style="font-family:' + t.value + '">' + t.label + '</span>';
}

var alignments = [
  {icon: "glyphicon-align-left", value: "left"},
  {icon: "glyphicon-align-center", value: "center"},
  {icon: "glyphicon-align-right", value: "right"},
  {icon: "glyphicon-align-justify", value: "justify"},
];


var controlGroups = [
    {
        section: "Headline",
        id: 'headline',
        hidden: false,
        controls: [
            {label : 'Typeface'      , id : 'fontFamily' , type : 'select' , options: typefaces, customOption: typefaceOption, value: 'Lato'} ,
            {label : 'Alignment'     , id : 'textAlign'  , type : 'buttonGroup' , options: alignments, value: 'left'} ,
            {label : 'Size'          , id : 'fontSize'   , type : 'range'  , min : 10 , max : 72  , step : 1, value: 24} ,
            {label : 'Margin Top'    , id : 'marginTop'     , type : 'range'  , min : 10 , max : 72  , step : 1, value: 0} ,
            {label : 'Margin Bottom' , id : 'marginBottom'  , type : 'range'  , min : 0  , max : 100 , step : 1, value: 20} ,
        ]
    },
    {
        section: "Byline",
        id: 'byline',
        hidden: true,
        controls: [
            {label : 'Typeface'      , id : 'fontFamily' , type : 'select' , options: typefaces, customOption: typefaceOption, value: 'Lato'} ,
            {label : 'Alignment'     , id : 'textAlign'  , type : 'buttonGroup' , options: alignments, value: 'left'} ,
            {label : 'Size'          , id : 'fontSize'     , type : 'range' , min : 10 , max : 72  , step : 1, value: 14} ,
            {label : 'Margin Top'    , id : 'marginTop'    , type : 'range' , min : 10 , max : 72  , step : 1, value: 0} ,
            {label : 'Margin Bottom' , id : 'marginBottom' , type : 'range' , min : 0  , max : 100 , step : 1, value: 5} ,
        ]
    },
    {
        section: "Dateline",
        id: 'dateline',
        hidden: true,
        controls: [
            {label : 'Typeface'      , id : 'fontFamily' , type : 'select' , options: typefaces, customOption: typefaceOption, value: 'Lato'} ,
            {label : 'Alignment'     , id : 'textAlign'  , type : 'buttonGroup' , options: alignments, value: 'left'} ,
            {label : 'Size'          , id : 'fontSize'     , type : 'range' , min : 10 , max : 72  , step : 1, value: 14} ,
            {label : 'Margin Top'    , id : 'marginTop'    , type : 'range' , min : 10 , max : 72  , step : 1, value: 0} ,
            {label : 'Margin Bottom' , id : 'marginBottom' , type : 'range' , min : 0  , max : 100 , step : 1, value: 0} ,
        ]
    },
    {
        section: "Body",
        id: 'body',
        hidden: true,
        controls: [
            {label : 'Typeface'      , id : 'fontFamily' , type : 'select' , options: typefaces, customOption: typefaceOption, value: 'Lato'} ,
            {label : 'Alignment'     , id : 'textAlign'  , type : 'buttonGroup' , options: alignments, value: 'left'} ,
            {label : 'Size'          , id : 'fontSize'     , type : 'range' , min : 10 , max : 72  , step : 1, value: 14} ,
            {label : 'Margin Top'    , id : 'marginTop'    , type : 'range' , min : 10 , max : 72  , step : 1, value: 0} ,
            {label : 'Margin Bottom' , id : 'marginBottom' , type : 'range' , min : 0  , max : 100 , step : 1, value: 20} ,
        ]
    }
];

function setStyle(section, name, suffix) {
    var s = suffix || "";
    return function(d) {
      return d.styles && d.styles[section] && (d.styles[section][name] + s);
    }
}

function setStyles(section) {
    return function(selection) {
        selection.style({
            'font-size'     : setStyle(section, "fontSize", "px"),
            'margin-top'    : setStyle(section, "marginTop", "px"),
            'margin-bottom' : setStyle(section, "marginBottom", "px"),
            'font-family'   : setStyle(section, "fontFamily"),
            'text-align'    : setStyle(section, "textAlign"),
        });
    };
}

function initialize(playgroundSelector, controlGroups, text) {
    var playground = d3.select(playgroundSelector);
    playground.append('div').attr('class', 'control-panel');
    playground.append('div').attr('class', 'posts');

    updateControls(playgroundSelector, controlGroups);
    updateText(playgroundSelector, text);
}

function updateControls(playgroundSelector, data) {
    var playground = d3.select(playgroundSelector);
    var controlGroups = playground.select('.control-panel').selectAll('.control-group').data(data);

    // GROUP ENTER
    var controlGroupsEnter = controlGroups.enter().append('div').attr('class', 'control-group');
    controlGroupsEnter
        .append('h5').text(function(d) { return d.section; })
        .on('click', function(d, controlGroupIndex) {
          data[controlGroupIndex].hidden = !d.hidden;
          updateControls(playgroundSelector, data);
        });
    var controls = controlGroupsEnter
        .append('div').attr('class', 'controls')
        .selectAll('.control').data(function(d) { return d.controls; });

    // GROUP ENTER + UPDATE
    controlGroups.classed('close', function(d) {
      return d.hidden;
    });

    // CONTROL ENTER
    var controlsEnter = controls.enter().append('div').attr('class', 'control');
    controlsEnter.append('label').text(function(d) { return d.label; });
    controlsEnter.append(function(d, controlIndex, controlGroupIndex) {
        switch(d.type) {
        case 'select':
          var select = d3.select(document.createElement('select'))
            .attr({
              'class'            : 'selectpicker',
              'data-width'       : '100px',
              'data-container'   : 'body',
              'data-style'       : 'btn-xs',
              'data-size'        : '10',
              'data-dropup-auto' : 'false',
            });
          d.options.forEach(function(t) {
            var option = select.append('option')
              .attr('value', t.value)
              .property('selected', d.value == t.value)
              .text(t.label);
            if (d.customOption) {
                option.attr('data-content', d.customOption(t));
            }
          });
          return select.node();
        case 'range':
          return d3.select(document.createElement('input'))
            .attr('type', 'range')
            .attr('min', d.min)
            .attr('max', d.max)
            .attr('step', d.step)
            .attr('value', d.value)
            .node();
        case 'buttonGroup':
          var group = d3.select(document.createElement('form'))
            .append('div')
              .attr('class', 'btn-group');
          d.options.forEach(function(t) {
            var button = group.append('label')
              .attr({type: 'button', class: 'btn btn-default btn-xs'});
            button.append('input')
              .attr({type: 'radio', value: t.value, name: controlGroupIndex + ':' + controlIndex + ':' + d.id});
            button.append('span')
                .attr({class: 'glyphicon ' + t.icon});
          });
          return group.node();
        }
    });
    controlsEnter.each(function(d, controlIndex, controlGroupIndex) {
      updateStyle(d.value, controlIndex, controlGroupIndex);
      updateText(playgroundSelector, text)
    });
    controlsEnter.on('input', function(d, controlIndex, controlGroupIndex) {
      var value = this.querySelector('input').value;
      updateStyle(value, controlIndex, controlGroupIndex);
      updateText(playgroundSelector, text)
    });
    controlsEnter.on('change', function(d, controlIndex, controlGroupIndex) {
      var value = this.querySelector('select, input:checked').value;
      updateStyle(value, controlIndex, controlGroupIndex);
      updateText(playgroundSelector, text)
    });

    function updateStyle(value, controlIndex, controlGroupIndex) {
      var group = controlGroups.data()[controlGroupIndex];
      var control = group.controls[controlIndex];
      styles[group.id][control.id] = value;
    }
}

function updateText(playgroundSelector, data) {
    var playground = d3.select(playgroundSelector);
    var postsContainer = playground.select('.posts');

    var posts = postsContainer.selectAll('div.post');

    var content= posts.data(data);

    // ENTER
    var contentEnter = content.enter().append('div').attr('class', 'post');
    contentEnter.append('h1').text(function(d) { return d.headline; });
    contentEnter.append('div').attr('class', 'byline').text(function(d) { return d.byline; });
    contentEnter.append('div').attr('class', 'dateline').text(function(d) { return d.dateline; });
    contentEnter.append('p').text(function(d) { return d.body; });
    // ENTER + UPDATE
    content.select('h1').call(setStyles("headline"));
    content.select('div.byline').call(setStyles("byline"));
    content.select('div.dateline').call(setStyles("dateline"));
    content.select('p').call(setStyles("body"));
    // EXIT
    content.exit().remove();
}
