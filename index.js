        // bulb on off

        var bulb = document.querySelector("#bulb");
        var btn = document.querySelector("button");
        var flag = 0;

        btn.addEventListener('click', function () {
            if (flag == 0) {
                bulb.style.backgroundColor = "yellow";
                console.log("clicked")
                flag=1;
                btn.innerHTML="off"
            }
            else{
                bulb.style.backgroundColor = "transparent";
                console.log("bulb off")
                flag=0;
                btn.innerHTML="on"
            }
        })




        //taking main div
        var x = document.getElementById("main-div");

        //section1
        var div1 = document.createElement("div");
        div1.className = "col-lg-6  px-5 py-3";
        x.appendChild(div1);
        div1.id = "div1";

        //section2
        var div2 = document.createElement("div");
        div2.className = "col-lg-6 px-5 py-3 bg-primary text-white text-center";
        x.appendChild(div2);
        div2.id = "div2";

        //calling function

        function xyz(tagName, tagText, tagClass, appendtag) {
            var cTag = document.createElement(tagName);
            if (tagName == "img") {
                cTag.src = tagText;
            }
            else {
                var cText = document.createTextNode(tagText);
                cTag.appendChild(cText);
            }
            cTag.className = tagClass;
            appendtag.appendChild(cTag);
        }

        //site data
        var btag = "btn button  text-start fs-4 fst-italic ";
        var hrtag = "border mb-0  border-2  border-black";
        xyz("h2", "Our Services", "heading text-center text-primary", div1);
        xyz("button", "Internal Medicine", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "Nephrology", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "Preventative Care", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "Hormone Therapy", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "IV Nutrition Therapy", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "Weight Management", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("button", "Aesthetic Medicine", btag, div1);
        xyz("hr", "", hrtag, div1);
        xyz("img", "3-modified.png", "img img-fluid m-3", div2);
        xyz("h3", "What we Treat", "h3  py-1 font-italic", div2);
        xyz("p", `Hashimoto's Thyroiditis / Rheumatoid Arthritis \n / Inflammatory Bowel Disease (IBD) / Lupus`, "ptag py-1", div2);
        xyz("button", "Learn More", "button text-primary mt-3 px-3 py-2 border-0 rounded-4", div2);