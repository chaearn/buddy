var clicksA = 0;
var clicksP = 0;
var clicksT = 0;
var trio = gsap.timeline({});

//Click on Arvin
$("#arvin").click(function () {
  // All haven't been click--Arvin active,Puppy inactive, Teddy inactive
  if (clicksA == 0 && clicksP == 0 && clicksT == 0) {
    trio.to("#arvin", { width: "100%", duration: 0.5, ease: "power1.in" });
    trio.to(
      "#arvin .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to(
      "#puppy .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to("#arvin .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#arvin .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );
    clicksA++;
    console.log("A=0, P=0, T=0");
  }
  // Arvin is clicked--revese Arvin, all default
  else if (clicksA != 0 && clicksP == 0 && clicksT == 0) {
    trio.to(
      "#arvin .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "32.8rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.arvin",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<"
    );
    clicksA--;
    console.log("A!=0, P=0, T=0");
  } else if (clicksA == 0 && clicksP != 0 && clicksT == 0) {
    trio.to("#arvin .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#arvin", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.puppy",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#arvin .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#arvin .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#arvin .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksP--;
    console.log("A=0, P!=0, T=0");
  } else if (clicksA == 0 && clicksP == 0 && clicksT != 0) {
    trio.to("#arvin .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#arvin", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");

    trio.to("#teddy .innertext_wrap", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#teddy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.teddy",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#arvin .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#arvin .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#arvin .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksT--;
    console.log("A=0, P=0, T!=0");
  }
  console.log(clicksA, clicksP, clicksT);
});

//Click on Puppy
$("#puppy").click(function () {
  // All haven't been click--Arvin active,Puppy inactive, Teddy inactive
  if (clicksP == 0 && clicksA == 0 && clicksT == 0) {
    trio.to("#puppy", { width: "100%", duration: 0.5, ease: "power1.in" });
    trio.to(
      "#puppy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to(
      "#arvin .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to("#puppy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );
    clicksP++;
    console.log("A=0, P=0, T=0");
  }
  // Arvin is clicked--revese Arvin, all default
  else if (clicksP != 0 && clicksA == 0 && clicksT == 0) {
    trio.to(
      "#puppy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "32.8rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.puppy",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<"
    );
    clicksP--;
    console.log("A!=0, P=0, T=0");
  } else if (clicksP == 0 && clicksA != 0 && clicksT == 0) {
    trio.to("#puppy .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#puppy", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");
    trio.to(
      "#arvin .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.arvin",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#puppy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#puppy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksA--;
    console.log("A=0, P!=0, T=0");
  } else if (clicksP == 0 && clicksA == 0 && clicksT != 0) {
    trio.to("#puppy .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#puppy", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");

    trio.to("#teddy .innertext_wrap", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#teddy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.teddy",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#puppy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#puppy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksT--;
    console.log("A=0, P=0, T!=0");
  }
  console.log(clicksA, clicksP, clicksT);
});

//Click on Teddy
$("#teddy").click(function () {
  // All haven't been click--Arvin active,Puppy inactive, Teddy inactive
  if (clicksT == 0 && clicksP == 0 && clicksA == 0) {
    trio.to("#teddy", { width: "100%", duration: 0.5, ease: "power1.in" });
    trio.to(
      "#teddy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to(
      "#puppy .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        opacity: 0,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to("#teddy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#teddy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );
    clicksT++;
    console.log("A=0, P=0, T=0");
  }
  // Arvin is clicked--revese Arvin, all default
  else if (clicksT != 0 && clicksP == 0 && clicksA == 0) {
    trio.to(
      "#teddy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "32.8rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        opacity: 1,
        width: "80%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.teddy",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<"
    );
    clicksT--;
    console.log("A!=0, P=0, T=0");
  } else if (clicksT == 0 && clicksP != 0 && clicksA == 0) {
    trio.to("#teddy .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#teddy", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");
    trio.to(
      "#puppy .innertext_wrap",
      { opacity: 0, display: "none", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.puppy",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#teddy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#teddy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#teddy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksP--;
    console.log("A=0, P!=0, T=0");
  } else if (clicksT == 0 && clicksP == 0 && clicksA != 0) {
    trio.to("#teddy .trio_img_wrap", {
      x: -200,
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to("#teddy", { width: "100%", duration: 0.5, ease: "power1.in" }, "<");

    trio.to("#arvin .innertext_wrap", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#arvin",
      { width: "33.333%", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .svg_text",
      {
        y: 0,
        width: "80%",
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<"
    );
    trio.to(
      ".svg_text.arvin",
      { opacity: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { x: 0, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#puppy .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#teddy .trio_img_wrap",
      { x: -200, duration: 0.5, ease: "power1.in" },
      "<"
    );
    trio.to(
      "#arvin .trio_img_wrap",
      { height: "25rem", y: "-1.4rem", duration: 0.5, ease: "power1.in" },
      "<"
    );

    trio.to(
      "#teddy .svg_text",
      {
        opacity: 1,
        width: "40%",
        y: 10,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "none",
      },
      "<+=0.1"
    );
    trio.to("#teddy .innertext_wrap", {
      display: "flex",
      duration: 0.5,
      ease: "power1.in",
    });
    trio.to(
      "#teddy .innertext_wrap",
      { opacity: 1, duration: 0.5, ease: "power1.in" },
      "<+-0.2"
    );

    clicksA--;
    console.log("A=0, P=0, T!=0");
  }
  console.log(clicksA, clicksP, clicksT);
});
