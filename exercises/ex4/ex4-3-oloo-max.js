var Widget = {
    init: function Widget(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
        return this;
    },
    render: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + "px",
                height: this.height + "px"
            }).appendTo($where);
        }
    },
};

var Button = {
    init: function (width, height, label) {
        this.linked = Object.create(Widget).init(width, height);
        this.label = label || "Default";
        this.linked.$elem = $("<button>").text(this.label);
        return this;
    },
    render: function ($where) {
        this.linked.render($where);
        this.linked.$elem.click(this.onClick.bind(this));
        return this;
    },
    onClick: function (evt) {
        console.log("Button " + this.label + " clicked");
    },
};

$(document).ready(function(){
    var $body = $(document.body);

    var btn1 = Object.create(Button).init(125, 30, "Hello").render($body);
    var btn2 = Object.create(Button).init(150, 40, "World");
    btn2.render($body);

    for (var i = 0; i < 100; i++) {
        var btn1 = Object.create(Button).init(10, 10, i).render($body);
    };

});