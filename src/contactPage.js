export function contactPageLoad() {
    const content = document.querySelector('div')
    const heading = document.createElement('h1');
    const image = document.createElement('img');
    const card = document.createElement('div.card');

    const nameTag = document.createElement('h1.baby');
    const title = document.createElement('div.title');
    const phoneNum = document.createElement('div.phoneNum');
    const email = document.createElement('div.email')

    title.textContent = "Owner";
    email.textContent = "totallyrealemail@notfake.com";
    phoneNum.textContent = "111-222-3333"

    image.src = ('./babies-2028268.svg');

    heading.textContent = "Contact Us";
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(card)

    card.appendChild(nameTag, phoneNum, email);

}