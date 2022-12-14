
# Hi, I'm Tim! 👋


## 🚀 About Me
I'm a software engineer that is currently learning full stack development with a focus on the frontend. 

I love solving problems and continuously teaching myself new concepts. I have great interpersonal skills and i'm ready to apply myself technically to become a well rounded professional.


# IOS Clone

The objective of creating this Iphone clone is to showcase the skills I have learnt while attending Nology's software engineering program. 

The languages and techniques I have used in this project include:
- HTML
- CSS 
- SCSS
- Javascript

For this particular project, I have decided to use the BEM notation to structure my properties. BEM stands for 'Block__Element--Modifier'. Using BEM is an efficient way to change and edit CSS properties - especially on a larger, complex scale.


I have also included the use of external pre-set SCSS variables which contain properties, such as themes. Using external SCSS files for preset variables is another great tool to use for larger projects as it makes CSS more modular, easier to edit and read. These external properties are located within a seperate directory (scss-documents) and will be imported with the '@import' command.


## Features

- Functional Home Button
- Settings, Camera and contact apps (Other apps in progress of development)
- Cross platform


## Lessons Learned

- **What did you learn while building this project?**

I learnt many skills whilst building this project, predominantly frontend. This project gave me a solid understanding of Document Object Manipulation, and how it can be utilised to make efficient and beautiful applications/websites. 

Another concept that I found intriguing from this project was the use of the 'absolute' and 'relative' values of the 'position' property. More specifically, I learnt (the hard way) that an element with the position:absolute property will always use its closest nested ancestor with a position:relative as a reference, regarding where it should be positioned. 

I thought this was powerful as I suddenly found myself positioning all of the elements quite easily when using 'position' in conjunction with grid and flexbox.

- **What challenges did you face and how did you overcome them?**

One of the biggest challenges I faced in this project, was trying to implement the mobile 'apps' as they would appear on an actual iphone. 

In particular, I wanted all the apps to be able to slide down the screen when called upon, and to subsequently slide back up whenever the home screen was clicked. Although the 'modal' element seems like an easy solution to this, I wasn't able to truly harness the visual affect of a vertically sliding box with this technique. Another potential solution was to simply use the 'display: none' property, however this would simply pop the app into existence without any real way to ease it onto the screen.

Instead - to overcome this challenge - I decided to be innovative and utilise the 'position' and 'top' properties. To summarise this approach, I gave a default property of 'top: -700px' to each app, which basically meant that the div for each app would be sitting outside of the screen unseen. 

By utilising Javascript's 'addEventListener' method, I added another class '.open' which would then give the apps a new top property of 0. This would force the app back into view. Furthermore, this allowed me to also use the 'transition: 0.4s' property to make it seem abit more natural and cohesive.


## Acknowledgements

 - [BEM Notation](https://getbem.com/introduction/)
 - [SCSS Basics](https://sass-lang.com/guide)
 - [Difference between css position absolute versus relative](https://leannezhang.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Tim-Mclennan/My-Portfolio)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tim-mclennan-0563341aa/)

