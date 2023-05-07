const langContainer = document.getElementsByClassName("language-container");

let flag = true;
for (const container of langContainer) {
  const dropDownList = container.getElementsByClassName("dropdown");
  for (const dropDown of dropDownList) {
    container.addEventListener("click", function () {
      if (flag === true) {
        container.setAttribute("style","outline: 2px white solid;")
        dropDown.setAttribute("class", "dropdown");
        flag = false;
      } else if (flag === false) {
        dropDown.setAttribute("class", "dropdown hidden");
        container.removeAttribute("style");
        flag = true;
      }
    });
  }
}



// faq section
const faqArray=[
  [
      "What is netflix?",
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  ],
  [
      "How much does Netflix cost?",
      "Watch Netflix on your smartphone, tablet, Snart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 149 rs to 649 rs a month. No extra costs, no contracts."
  ],
  [
      "Where can I watch?",
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  ],
  [
      "How do I cancel?",
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  ],
  [
      "What can i watch on Netflix?",
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  ],
  [
      "Is Netflix good for kids?",
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  ],
];
const faqSection = document.getElementById("faq-section");
const faqsContainer=document.createElement("div");
faqsContainer.setAttribute("class","faqs-container");
faqSection.append(faqsContainer);
const faqHeading=document.createElement("h2");
faqHeading.textContent="Frequently Asked Questions";
faqHeading.setAttribute("class","faq-container-heading")
faqsContainer.append(faqHeading);

const createFaq=function(heading,body){
  const faqContainer=document.createElement("div");
  faqContainer.setAttribute("class","faq-container");
  faqsContainer.append(faqContainer);
  const faqHeadingButtonContainer=document.createElement("div");
  faqHeadingButtonContainer.setAttribute("class","faq-heading-button-container");
  faqContainer.append(faqHeadingButtonContainer);
  const faqHeadingContainer=document.createElement("div");
  faqHeadingContainer.setAttribute("class","faq-heading-container");
  faqHeadingButtonContainer.append(faqHeadingContainer);
  const faqHeading=document.createElement("p");
  faqHeading.textContent=heading;
  faqHeadingContainer.append(faqHeading);

  const faqButtonContainer=document.createElement("div");
  faqButtonContainer.setAttribute("class","faq-button-container");
  faqHeadingButtonContainer.append(faqButtonContainer);

  let flag=true;
  const button=document.createElement("img");
  button.setAttribute("src","assets/expand.svg");
  button.setAttribute("class","faq-button");
  faqContainer.addEventListener("click",function(){
      if (flag===true){
          faqBody.setAttribute("class","faq-body");
          button.setAttribute("src","assets/collapse.svg");
          flag=false;
      }else if(flag===false){
          faqBody.setAttribute("class","faq-body hidden");
          button.setAttribute("src","assets/expand.svg");
          flag=true;
      }
  });
  faqButtonContainer.append(button);
  const faqBody=document.createElement("p");
  faqBody.setAttribute("class","faq-body hidden");
  faqBody.textContent=body;
  faqContainer.append(faqBody);
}

for (const item of faqArray){
  const [title,heading]=item;
  createFaq(title, heading);
}

const getStartedContainer =document.createElement("div");
getStartedContainer.setAttribute("class","get-started-container");
getStartedContainer.setAttribute("style","margin-top:20px;")
faqsContainer.append(getStartedContainer);
const getStartedForm = document.createElement("form");
getStartedForm.setAttribute("class","get-started-form");
getStartedForm.setAttribute("method","post");
getStartedContainer.append(getStartedForm);
const formMessage=document.createElement("p");
formMessage.setAttribute("class","form-message");
formMessage.textContent="Ready to watch? Enter your email to create or restart your membership.";
getStartedForm.append(formMessage);
const emailGetstartedContainer=document.createElement("div");
emailGetstartedContainer.setAttribute("class","email-getstarted-container");
getStartedForm.append(emailGetstartedContainer);
const email=document.createElement("input");
email.setAttribute("class","email");
email.setAttribute("type","email");
email.setAttribute("name","email");
email.setAttribute("placeholder","Email Address");
emailGetstartedContainer.append(email);
const button=document.createElement("span");
button.setAttribute("class","button");
emailGetstartedContainer.append(button);
const p=document.createElement("p");
p.textContent="Get Started";
button.append(p);
const image=document.createElement("img");
image.setAttribute("src","assets/greater-than-solid.svg");
button.append(image);
