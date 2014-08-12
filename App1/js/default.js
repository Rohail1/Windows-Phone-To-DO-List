// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=329104
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
            var button = document.getElementById("add");
            button.addEventListener("click", add, false);
            setInterval(remove, 5000);
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    function add(e) {
        var input = document.getElementById("txtbx").value;
        var list = document.getElementById("main-list");
        var li = document.createElement("li");
        var node = document.createElement("input");
        node.setAttribute("type", "checkbox");
        var nodetxt = document.createTextNode(" "+input);
        li.appendChild(node);
        li.appendChild(nodetxt);
        li.style.fontSize = "2em";
        li.style.listStyle = "none";
        list.appendChild(li);
    }

    function remove() {
        var checkboxlist = document.getElementsByTagName("input");
        var mainlist = document.getElementById("main-list");
        for (var i = 0; i < checkboxlist.length; i++) {
            if(checkboxlist[i].checked)
            {  
                checkboxlist[i].parentElement.style.textDecoration = "line-through";        
                var num_hold = i;
                setTimeout(function () {
                    del(num_hold);
                },1000);       
              
            }
        }
    }
    function del(num) {
        var mainlist = document.getElementById("main-list");
        var checkboxlist = document.getElementsByTagName("input");
        if (num >= checkboxlist.length) {
            var holder = checkboxlist.length - num;
            if (holder === 0) {
                num = num - 1;
            }
            else {
                num = num - holder;
            }
            
            mainlist.removeChild(checkboxlist[num].parentElement);
        }
        else {
            mainlist.removeChild(checkboxlist[num].parentElement);
        }
        
    }

    app.start();
})();
