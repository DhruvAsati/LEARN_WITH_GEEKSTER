let container = document.getElementById('container');
//book api https://books-backend.p.goit.global/books/top-books
//book category API https://books-backend.p.goit.global/books/category-list

let bookList = document.getElementById('bookCategory');
let bookContainer = document.getElementById('bookContainer');

// Fetch book categories from the API

async function fetchBookCategories() {
    try {
        const response = await fetch('https://books-backend.p.goit.global/books/category-list');
        const data = await response.json();
        displayBookCategories(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchBookCategories();

// Display book categories

function displayBookCategories(categories) {
    categories.forEach(category => {
        let option = document.createElement('option');
        //data is list_name all inside array
        option.value = category.list_name;
        option.textContent = category.list_name;
        bookList.appendChild(option);
        option.addEventListener('click', ()=>{
            fetchTopBooksByCategory(option.value);
            bookContainer.innerHTML = '';
            // Fetch top books by category from the API
        })
    });
}


// Sample API response data
const apiResponse =[
    {
      "list_name": "Advice How-To and Miscellaneous",
      "books": [
        {
          "_id": "643282b1e85766588626a080",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "James Clear",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
          "book_image_width": 328,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/0398a355-c032-534e-a0af-647b06f0840d",
          "contributor": "by James Clear",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0735211299",
          "primary_isbn13": "9780735211292",
          "publisher": "Avery",
          "rank": 1,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "ATOMIC HABITS",
          "updated_date": "2023-04-05 22:10:16",
          "weeks_on_list": 175,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780735211292?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a0fc",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rick Rubin with Neil Strauss",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593652886.jpg",
          "book_image_width": 341,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/da28ca16-1ebd-55aa-aba3-fde278604a82",
          "contributor": "by Rick Rubin with Neil Strauss",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593652886",
          "primary_isbn13": "9780593652886",
          "publisher": "Penguin Press",
          "rank": 4,
          "rank_last_week": 2,
          "sunday_review_link": "",
          "title": "THE CREATIVE ACT",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 11,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593652886?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593652886"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCREATIVE%252BACT%252FRick%252BRubin%252Bwith%252BNeil%252BStrauss%252F9780593652886&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCREATIVE%252BACT%252BRick%252BRubin%252Bwith%252BNeil%252BStrauss"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593652886&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCREATIVE%2BACT"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593652886%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCREATIVE%2BACT%2BRick%2BRubin%2Bwith%2BNeil%2BStrauss%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b72b",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2024-05-24T07:59:07.853Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593243919?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Charles Duhigg",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593243916.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7fd4813e-e2fb-5a37-93a7-29c5bec64ab1",
          "contributor": "by Charles Duhigg",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:26",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593243919",
          "primary_isbn13": "9780593243916",
          "publisher": "Random House",
          "rank": 5,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "SUPERCOMMUNICATORS",
          "updated_date": "2024-03-20 22:24:55",
          "weeks_on_list": 4,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593243919?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593243916?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593243916"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FSUPERCOMMUNICATORS%2FCharles%2BDuhigg%2F9780593243916"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593243916"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593243916?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66208de4a957e5c1ae269d4a",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2024-05-24T07:59:08.687Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Boy-Mole-Fox-Horse/dp/0062976583?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Charlie Mackesy",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062976581.jpg",
          "book_image_width": 330,
          "book_image_height": 445,
          "book_review_link": "",
          "book_uri": "nyt://book/858fb0b9-07d7-5b8a-b3de-cdcf6ea6fe7a",
          "contributor": "by Charlie Mackesy",
          "contributor_note": "",
          "created_date": "2024-04-17 22:20:32",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0062976583",
          "primary_isbn13": "9780062976581",
          "publisher": "HarperOne",
          "rank": 7,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE BOY, THE MOLE, THE FOX AND THE HORSE",
          "updated_date": "2024-04-17 22:25:36",
          "weeks_on_list": 216,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Boy-Mole-Fox-Horse/dp/0062976583?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780062976581?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062976581"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BBOY%252C%2BTHE%2BMOLE%252C%2BTHE%2BFOX%2BAND%2BTHE%2BHORSE%2FCharlie%2BMackesy%2F9780062976581"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780062976581"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780062976581?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372625",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2024-05-24T07:59:07.792Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593714024?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Scott Galloway",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593714027.jpg",
          "book_image_width": 338,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/f47215f1-af17-5b51-9fc3-4a6343180d46",
          "contributor": "by Scott Galloway",
          "contributor_note": "",
          "created_date": "2024-05-01 22:20:27",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593714024",
          "primary_isbn13": "9780593714027",
          "publisher": "Portfolio",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE ALGEBRA OF WEALTH",
          "updated_date": "2024-05-01 22:25:09",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593714024?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593714027?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593714027"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BALGEBRA%2BOF%2BWEALTH%2FScott%2BGalloway%2F9780593714027"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593714027"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593714027?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Audio Fiction",
      "books": [
        {
          "_id": "643282b1e85766588626a0d2",
          "list_name": "Audio Fiction",
          "date": "2024-05-24T07:59:09.623Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Shel Van Pelt",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063204157.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/1f91d061-8667-56a8-a628-4a8af48184a1",
          "contributor": "by Shelby Van Pelt",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:05",
          "description": "A widow working the night shift at the Sowell Bay Aquarium is aided in solving a mystery by a giant Pacific octopus living there. Read by Marin Ireland and Michael Urie. 11 hours, 16 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0063204185",
          "primary_isbn13": "9780063204188",
          "publisher": "HarperAudio",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "REMARKABLY BRIGHT CREATURES",
          "updated_date": "2023-04-05 23:10:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780063204188?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063204188"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FREMARKABLY%252BBRIGHT%252BCREATURES%252FShel%252BVan%252BPelt%252F9780063204188&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DREMARKABLY%252BBRIGHT%252BCREATURES%252BShel%252BVan%252BPelt"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063204188&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DREMARKABLY%2BBRIGHT%2BCREATURES"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063204188%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DREMARKABLY%2BBRIGHT%2BCREATURES%2BShel%2BVan%2BPelt%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6b3",
          "list_name": "Audio Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Kristin Hannah",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/f3720434-f975-50f3-9dd4-b5607346c840",
          "contributor": "by Kristin Hannah",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:22",
          "description": "In 1965, a nursing student follows her brother to serve during the Vietnam War and returns to a divided America. Read by Julia Whelan. 14 hours, 57 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9781250317957",
          "publisher": "Macmillan Audio",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE WOMEN",
          "updated_date": "2024-03-07 00:00:22",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250317957?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250317957"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMEN%2FKristin%2BHannah%2F9781250317957"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781250317957"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781250317957?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6dd",
          "list_name": "Audio Fiction",
          "date": "2024-05-24T07:59:08.768Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Freida McFadden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781728296210.jpg",
          "book_image_width": 313,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/70a7f9e6-ff21-56af-9c1d-0f2cd1737dcc",
          "contributor": "by Freida McFadden",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:22",
          "description": "A math teacher at Caseham High suspects there is more going on behind a scandal involving a teacher and a student. Read by Leslie Howard and Danny Montooth. 9 hours and 35 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9781666652536",
          "publisher": "Hollywood Upstairs",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE TEACHER",
          "updated_date": "2024-03-07 00:00:22",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781666652536?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781666652536"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BTEACHER%2FFreida%2BMcFadden%2F9781666652536"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781666652536"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781666652536?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b6f8",
          "list_name": "Audio Fiction",
          "date": "2024-05-24T07:59:07.838Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593492919?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Ashley Elston",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593492918.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/dc6b82d7-deef-5a9b-b000-63a639d91935",
          "contributor": "by Ashley Elston",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:22",
          "description": "A woman who works for a mysterious boss takes on a new identity to dig up information on someone. Read by Saskia Maarleveld. 9 hours, 17 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593789687",
          "primary_isbn13": "9780593789681",
          "publisher": "Penguin Audio",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "FIRST LIE WINS",
          "updated_date": "2024-03-07 00:00:22",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593492919?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593789681?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593789681"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFIRST%2BLIE%2BWINS%2FAshley%2BElston%2F9780593789681"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593789681"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593789681?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b731",
          "list_name": "Audio Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Yarros",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
          "book_image_width": 309,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/980751fc-7d71-54a6-a840-50a985900687",
          "contributor": "by Rebecca Yarros",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:22",
          "description": "The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves. Read by Rebecca Soler and Teddy Hamilton. 28 hours, 16 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1705085083",
          "primary_isbn13": "9781705085080",
          "publisher": "Recorded Books",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "IRON FLAME",
          "updated_date": "2024-03-07 00:00:22",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781705085080?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781705085080"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIRON%2BFLAME%2FRebecca%2BYarros%2F9781705085080"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781705085080"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781705085080?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Audio Nonfiction",
      "books": [
        {
          "_id": "643282b1e85766588626a0b4",
          "list_name": "Audio Nonfiction",
          "date": "2024-05-24T07:59:08.800Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Jennette McCurdy",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/dade20d6-b303-510c-9687-48eab9308755",
          "contributor": "by Jennette McCurdy",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:08",
          "description": "The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9781797147949",
          "publisher": "Simon & Schuster Audio",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "I'M GLAD MY MOM DIED",
          "updated_date": "2023-04-05 23:10:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781797147949?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781797147949"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252FJennette%252BMcCurdy%252F9781797147949&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252BJennette%252BMcCurdy"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781797147949&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781797147949%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED%2BJennette%2BMcCurdy%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a154",
          "list_name": "Audio Nonfiction",
          "date": "2024-05-16T07:25:04.303Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Bessel van der Kolk",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
          "book_image_width": 128,
          "book_image_height": 193,
          "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
          "book_uri": "nyt://book/fd440b07-1767-5b93-98a2-44dc366d4505",
          "contributor": "by Bessel van der Kolk",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:08",
          "description": "How trauma affects the body and mind, and innovative treatments for recovery. Read by Sean Pratt. 16 hours, 17 minutes unabridged. ",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9780593412701",
          "publisher": "Penguin Audio",
          "rank": 7,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE BODY KEEPS THE SCORE",
          "updated_date": "2023-04-05 23:10:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593412701?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593412701"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780593412701&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593412701&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593412701%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a0d4",
          "list_name": "Audio Nonfiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Peter Attia with Bill Gifford",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593236598.jpg",
          "book_image_width": 385,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/e093216d-a3f3-5b3b-8bee-fea6808cabb8",
          "contributor": "by Peter Attia with Bill Gifford",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:08",
          "description": "A look at recent scientific research on aging and longevity. Read by Peter Attia. 17 hours, 8 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593664442",
          "primary_isbn13": "9780593664445",
          "publisher": "Random House Audio",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "OUTLIVE",
          "updated_date": "2023-04-05 23:10:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593664445?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593664445"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FOUTLIVE%252FPeter%252BAttia%252Bwith%252BBill%252BGifford%252F9780593664445&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DOUTLIVE%252BPeter%252BAttia%252Bwith%252BBill%252BGifford"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593664445&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DOUTLIVE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593664445%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DOUTLIVE%2BPeter%2BAttia%2Bwith%2BBill%2BGifford%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b797",
          "list_name": "Audio Nonfiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "David Grann",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
          "book_image_width": 326,
          "book_image_height": 495,
          "book_review_link": "https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html",
          "book_uri": "nyt://book/a533ac8d-8de2-5e6d-9a94-be750dfcb50b",
          "contributor": "by David Grann",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:08",
          "description": "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively. Read by Will Patton, Ann Marie Lee and Danny Campbell. 9 hours, 45 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9780307747457",
          "publisher": "Random House Audio",
          "rank": 9,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "KILLERS OF THE FLOWER MOON",
          "updated_date": "2024-03-07 00:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780307747457?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307747457"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON%2FDavid%2BGrann%2F9780307747457"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780307747457"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780307747457?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ea957e5c1ae05b7d1",
          "list_name": "Audio Nonfiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "David Grann",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534260.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/52b1f901-aea5-51fd-8d73-45f79d5893cc",
          "contributor": "by David Grann",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:08",
          "description": "The survivors of a shipwrecked British vessel on a secret mission during an imperial war with Spain have different accounts of events. Read by Dion Graham and the author. 8 hours, 28 minutes unabridged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9780307747495",
          "publisher": "Random House Audio",
          "rank": 11,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE WAGER",
          "updated_date": "2024-03-07 00:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780307747495?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307747495"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWAGER%2FDavid%2BGrann%2F9780307747495"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780307747495"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780307747495?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Business Books",
      "books": [
        {
          "_id": "643282b1e85766588626a0b6",
          "list_name": "Business Books",
          "date": "2024-05-24T07:59:08.614Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rick Rubin with Neil Strauss",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593652886.jpg",
          "book_image_width": 341,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/da28ca16-1ebd-55aa-aba3-fde278604a82",
          "contributor": "by Rick Rubin with Neil Strauss",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:12",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593652886",
          "primary_isbn13": "9780593652886",
          "publisher": "Penguin Press",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE CREATIVE ACT",
          "updated_date": "2023-04-05 23:10:12",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593652886?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593652886?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593652886"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCREATIVE%252BACT%252FRick%252BRubin%252Bwith%252BNeil%252BStrauss%252F9780593652886&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCREATIVE%252BACT%252BRick%252BRubin%252Bwith%252BNeil%252BStrauss"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593652886&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCREATIVE%2BACT"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593652886%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCREATIVE%2BACT%2BRick%2BRubin%2Bwith%2BNeil%2BStrauss%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a087",
          "list_name": "Business Books",
          "date": "2024-05-24T07:59:07.826Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "James Clear",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
          "book_image_width": 328,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/0398a355-c032-534e-a0af-647b06f0840d",
          "contributor": "by James Clear",
          "contributor_note": "",
          "created_date": "2023-04-05 23:10:12",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0735211299",
          "primary_isbn13": "9780735211292",
          "publisher": "Avery",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "ATOMIC HABITS",
          "updated_date": "2023-04-05 23:10:12",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780735211292?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b765",
          "list_name": "Business Books",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593243919?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Charles Duhigg",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593243916.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7fd4813e-e2fb-5a37-93a7-29c5bec64ab1",
          "contributor": "by Charles Duhigg",
          "contributor_note": "",
          "created_date": "2024-03-07 00:00:13",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593243919",
          "primary_isbn13": "9780593243916",
          "publisher": "Random House",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "SUPERCOMMUNICATORS",
          "updated_date": "2024-03-07 00:00:13",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593243919?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593243916?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593243916"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FSUPERCOMMUNICATORS%2FCharles%2BDuhigg%2F9780593243916"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593243916"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593243916?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372640",
          "list_name": "Business Books",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593714024?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Scott Galloway",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593714027.jpg",
          "book_image_width": 338,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/f47215f1-af17-5b51-9fc3-4a6343180d46",
          "contributor": "by Scott Galloway",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:13",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593714024",
          "primary_isbn13": "9780593714027",
          "publisher": "Portfolio",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE ALGEBRA OF WEALTH",
          "updated_date": "2024-05-01 23:00:13",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593714024?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593714027?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593714027"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BALGEBRA%2BOF%2BWEALTH%2FScott%2BGalloway%2F9780593714027"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593714027"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593714027?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372688",
          "list_name": "Business Books",
          "date": "2024-05-24T07:59:07.898Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/140197760X?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Jamie Kern Lima",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781401977603.jpg",
          "book_image_width": 340,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/0957fcc3-8c5e-5c7e-a666-c7c22a570692",
          "contributor": "by Jamie Kern Lima",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:13",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "140197760X",
          "primary_isbn13": "9781401977603",
          "publisher": "Hay House",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "WORTHY",
          "updated_date": "2024-05-01 23:00:13",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/140197760X?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781401977603?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781401977603"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FWORTHY%2FJamie%2BKern%2BLima%2F9781401977603"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781401977603"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781401977603?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Childrens Middle Grade Hardcover",
      "books": [
        {
          "_id": "643282b1e85766588626a0ca",
          "list_name": "Childrens Middle Grade Hardcover",
          "date": "2024-05-24T07:59:07.790Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "America's Test Kitchen Kids",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781492670025.jpg",
          "book_image_width": 330,
          "book_image_height": 419,
          "book_review_link": "",
          "book_uri": "nyt://book/894e62dd-9e61-570a-ad32-6f4617d323e5",
          "contributor": "by America's Test Kitchen Kids",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:24",
          "description": "Over 100 kid-tested recipes from America's Test Kitchen.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1492670022",
          "primary_isbn13": "9781492670025",
          "publisher": "Sourcebooks Jabberwocky",
          "rank": 3,
          "rank_last_week": 5,
          "sunday_review_link": "",
          "title": "THE COMPLETE COOKBOOK FOR YOUNG CHEFS",
          "updated_date": "2023-04-05 22:10:14",
          "weeks_on_list": 147,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781492670025?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781492670025"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCOMPLETE%252BCOOKBOOK%252BFOR%252BYOUNG%252BCHEFS%252FAmerica%252527s%252BTest%252BKitchen%252BKids%252F9781492670025&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCOMPLETE%252BCOOKBOOK%252BFOR%252BYOUNG%252BCHEFS%252BAmerica%252527s%252BTest%252BKitchen%252BKids"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781492670025&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BCOMPLETE%2BCOOKBOOK%2BFOR%2BYOUNG%2BCHEFS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781492670025%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCOMPLETE%2BCOOKBOOK%2BFOR%2BYOUNG%2BCHEFS%2BAmerica%2527s%2BTest%2BKitchen%2BKids%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a144",
          "list_name": "Childrens Middle Grade Hardcover",
          "date": "2024-05-24T07:59:07.901Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250147425?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Katherine Applegate.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250147424.jpg",
          "book_image_width": 347,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/8b347350-da89-57e4-ab94-7812cf36069d",
          "contributor": "by Katherine Applegate. Illustrated by Charles Santoso",
          "contributor_note": "Illustrated by Charles Santoso",
          "created_date": "2023-04-05 22:05:24",
          "description": "After a shark attack, Odder recuperates at the aquarium with the scientists who raised her.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1250147425",
          "primary_isbn13": "9781250147424",
          "publisher": "Feiwel & Friends",
          "rank": 5,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "ODDER",
          "updated_date": "2023-04-05 22:10:14",
          "weeks_on_list": 28,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250147425?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250147424?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250147424"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FODDER%252FKatherine%252BApplegate.%252F9781250147424&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DODDER%252BKatherine%252BApplegate."
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250147424&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DODDER"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250147424%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DODDER%2BKatherine%2BApplegate.%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6b0",
          "list_name": "Childrens Middle Grade Hardcover",
          "date": "2024-05-24T07:59:07.842Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338736078?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Alan Gratz",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338736076.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/13b06425-d26e-55e8-bf50-a22623bbcf32",
          "contributor": "by Alan Gratz",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:23",
          "description": "The friends Frank and Stanley give a vivid account of the Pearl Harbor attack.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338736078",
          "primary_isbn13": "9781338736076",
          "publisher": "Scholastic",
          "rank": 1,
          "rank_last_week": 6,
          "sunday_review_link": "",
          "title": "HEROES",
          "updated_date": "2024-03-20 22:24:52",
          "weeks_on_list": 6,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338736078?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338736076?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338736076"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FHEROES%2FAlan%2BGratz%2F9781338736076"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338736076"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338736076?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6d8",
          "list_name": "Childrens Middle Grade Hardcover",
          "date": "2024-05-24T07:59:07.930Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1368081150?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rick Riordan and Mark Oshiro",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781368081153.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/8384c64a-d0de-5285-9132-8f16cc7b085f",
          "contributor": "by Rick Riordan and Mark Oshiro",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:23",
          "description": "The demigods Will and Nico embark on a dangerous journey to the Underworld to rescue an old friend.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1368081150",
          "primary_isbn13": "9781368081153",
          "publisher": "Disney Hyperion",
          "rank": 2,
          "rank_last_week": 10,
          "sunday_review_link": "",
          "title": "THE SUN AND THE STAR",
          "updated_date": "2024-03-20 22:24:52",
          "weeks_on_list": 46,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1368081150?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781368081153?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781368081153"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BSUN%2BAND%2BTHE%2BSTAR%2FRick%2BRiordan%2Band%2BMark%2BOshiro%2F9781368081153"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781368081153"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781368081153?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b75f",
          "list_name": "Childrens Middle Grade Hardcover",
          "date": "2024-05-24T07:59:08.611Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338634828?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Tui T. Sutherland.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338634822.jpg",
          "book_image_width": 433,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/8769e066-c615-57c4-92f6-d7106cdcad3a",
          "contributor": "by Tui T. Sutherland. Illustrated by Joy Ang",
          "contributor_note": "Illustrated by Joy Ang",
          "created_date": "2024-03-20 22:20:24",
          "description": "A deeper dive into the legends of the 10 dragon tribes.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338634828",
          "primary_isbn13": "9781338634822",
          "publisher": "Scholastic",
          "rank": 7,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "WINGS OF FIRE: A GUIDE TO THE DRAGON WORLD",
          "updated_date": "2024-03-20 22:24:52",
          "weeks_on_list": 23,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338634828?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338634822?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338634822"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FWINGS%2BOF%2BFIRE%253A%2BA%2BGUIDE%2BTO%2BTHE%2BDRAGON%2BWORLD%2FTui%2BT.%2BSutherland.%2F9781338634822"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338634822"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338634822?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Combined Print and E-Book Fiction",
      "books": [
        {
          "_id": "65fc3c9ca957e5c1ae05b6aa",
          "list_name": "Combined Print and E-Book Fiction",
          "date": "2024-05-24T07:59:07.783Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Kristin Hannah",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/9ce735af-71cf-5ff3-a367-43ee07e3fdd7",
          "contributor": "by Kristin Hannah",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:28",
          "description": "In 1965, a nursing student follows her brother to serve during the Vietnam War and returns to a divided America.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1250178630",
          "primary_isbn13": "9781250178633",
          "publisher": "St. Martin's",
          "rank": 1,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "THE WOMEN",
          "updated_date": "2024-03-20 22:24:57",
          "weeks_on_list": 6,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250178633?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250178633"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMEN%2FKristin%2BHannah%2F9781250178633"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781250178633"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781250178633?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6e9",
          "list_name": "Combined Print and E-Book Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1649374046?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Yarros",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
          "book_image_width": 309,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/106c2cf0-7d20-51b1-bad4-91c3ebcd131a",
          "contributor": "by Rebecca Yarros",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:28",
          "description": "Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1649374046",
          "primary_isbn13": "9781649374042",
          "publisher": "Red Tower",
          "rank": 3,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "FOURTH WING",
          "updated_date": "2024-03-20 22:24:57",
          "weeks_on_list": 46,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1649374046?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781649374042?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374042"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFOURTH%2BWING%2FRebecca%2BYarros%2F9781649374042"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781649374042"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781649374042?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b703",
          "list_name": "Combined Print and E-Book Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Yarros",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
          "book_image_width": 309,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/d3c570c9-3c3a-5c8b-a740-85ea5e92bfc9",
          "contributor": "by Rebecca Yarros",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:28",
          "description": "The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1649374178",
          "primary_isbn13": "9781649374172",
          "publisher": "Red Tower",
          "rank": 4,
          "rank_last_week": 5,
          "sunday_review_link": "",
          "title": "IRON FLAME",
          "updated_date": "2024-03-20 22:24:57",
          "weeks_on_list": 19,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781649374172?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374172"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIRON%2BFLAME%2FRebecca%2BYarros%2F9781649374172"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781649374172"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781649374172?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b71f",
          "list_name": "Combined Print and E-Book Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Emily Henry",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/0f245497-9fba-598a-9f85-b482f86a24a1",
          "contributor": "by Emily Henry",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:28",
          "description": "A former couple pretend to be together for the sake of their friends during their annual getaway in Maine.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593441192",
          "primary_isbn13": "9780593441190",
          "publisher": "Berkley",
          "rank": 5,
          "rank_last_week": 8,
          "sunday_review_link": "",
          "title": "HAPPY PLACE",
          "updated_date": "2024-03-20 22:24:57",
          "weeks_on_list": 17,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593441190?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593441190"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FHAPPY%2BPLACE%2FEmily%2BHenry%2F9780593441190"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593441190"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593441190?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ea957e5c1ae05b7d7",
          "list_name": "Combined Print and E-Book Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Freida McFadden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781728296210.jpg",
          "book_image_width": 313,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/85e8b9be-4878-543a-874b-6b5a27292e8c",
          "contributor": "by Freida McFadden",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:28",
          "description": "A math teacher at Caseham High suspects there is more going on behind a scandal involving a teacher and a student.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1728296218",
          "primary_isbn13": "9781728296210",
          "publisher": "Poisoned Pen",
          "rank": 9,
          "rank_last_week": 7,
          "sunday_review_link": "",
          "title": "THE TEACHER",
          "updated_date": "2024-03-20 22:24:58",
          "weeks_on_list": 6,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781728296210?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781728296210"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BTEACHER%2FFreida%2BMcFadden%2F9781728296210"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781728296210"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781728296210?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Combined Print and E-Book Nonfiction",
      "books": [
        {
          "_id": "643282b1e85766588626a07b",
          "list_name": "Combined Print and E-Book Nonfiction",
          "date": "2024-05-16T07:25:05.284Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Peter Attia with Bill Gifford",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593236598.jpg",
          "book_image_width": 385,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/69f6e624-4f30-59d6-8103-816d17ae5ec1",
          "contributor": "by Peter Attia with Bill Gifford",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:29",
          "description": "A look at recent scientific research on aging and longevity.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593236599",
          "primary_isbn13": "9780593236598",
          "publisher": "Harmony",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "OUTLIVE",
          "updated_date": "2023-04-05 22:10:19",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593236598?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593236598"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FOUTLIVE%252FPeter%252BAttia%252Bwith%252BBill%252BGifford%252F9780593236598&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DOUTLIVE%252BPeter%252BAttia%252Bwith%252BBill%252BGifford"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593236598&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DOUTLIVE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593236598%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DOUTLIVE%2BPeter%2BAttia%2Bwith%2BBill%2BGifford%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a0a6",
          "list_name": "Combined Print and E-Book Nonfiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Bessel van der Kolk",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
          "book_image_width": 128,
          "book_image_height": 193,
          "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
          "book_uri": "nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e",
          "contributor": "by Bessel van der Kolk",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:29",
          "description": "How trauma affects the body and mind, and innovative treatments for recovery.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0143127748",
          "primary_isbn13": "9780143127741",
          "publisher": "Penguin",
          "rank": 2,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "THE BODY KEEPS THE SCORE",
          "updated_date": "2023-04-05 22:10:19",
          "weeks_on_list": 136,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780143127741?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a164",
          "list_name": "Combined Print and E-Book Nonfiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Jennette McCurdy",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/be73b1c3-c238-5232-af55-bf70c59cb907",
          "contributor": "by Jennette McCurdy",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:30",
          "description": "The actress and filmmaker describes her eating disorders and difficult relationship with her mother.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1982185821",
          "primary_isbn13": "9781982185824",
          "publisher": "Simon & Schuster",
          "rank": 6,
          "rank_last_week": 5,
          "sunday_review_link": "",
          "title": "I'M GLAD MY MOM DIED",
          "updated_date": "2023-04-05 22:10:19",
          "weeks_on_list": 34,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781982185824?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982185824"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252FJennette%252BMcCurdy%252F9781982185824&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252BJennette%252BMcCurdy"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982185824&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982185824%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED%2BJennette%2BMcCurdy%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b3e85766588626a1f4",
          "list_name": "Combined Print and E-Book Nonfiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Robin Wall Kimmerer",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
          "book_image_width": 321,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/194ea111-42ad-5795-9fb5-3e155ffa5e79",
          "contributor": "by Robin Wall Kimmerer",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:30",
          "description": "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1571313567",
          "primary_isbn13": "9781571313560",
          "publisher": "Milkweed Editions",
          "rank": 11,
          "rank_last_week": 11,
          "sunday_review_link": "",
          "title": "BRAIDING SWEETGRASS",
          "updated_date": "2023-04-05 22:10:20",
          "weeks_on_list": 73,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781571313560?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781571313560"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBRAIDING%252BSWEETGRASS%252FRobin%252BWall%252BKimmerer%252F9781571313560&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBRAIDING%252BSWEETGRASS%252BRobin%252BWall%252BKimmerer"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781571313560&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DBRAIDING%2BSWEETGRASS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781571313560%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBRAIDING%2BSWEETGRASS%2BRobin%2BWall%2BKimmerer%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b4e85766588626a23c",
          "list_name": "Combined Print and E-Book Nonfiction",
          "date": "2024-05-16T07:25:03.233Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "David Grann",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
          "book_image_width": 326,
          "book_image_height": 495,
          "book_review_link": "https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html",
          "book_uri": "nyt://book/c5c1cd05-cdbc-5e7a-8255-1923ab4b1ceb",
          "contributor": "by David Grann",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:30",
          "description": "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0307742482",
          "primary_isbn13": "9780307742483",
          "publisher": "Doubleday",
          "rank": 15,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "KILLERS OF THE FLOWER MOON",
          "updated_date": "2023-04-05 22:10:20",
          "weeks_on_list": 72,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780307742483?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307742483"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252FDavid%252BGrann%252F9780307742483&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252BDavid%252BGrann"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780307742483&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780307742483%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON%2BDavid%2BGrann%26aff%3DNYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Graphic Books and Manga",
      "books": [
        {
          "_id": "6632d16aa957e5c1ae372626",
          "list_name": "Graphic Books and Manga",
          "date": "2024-05-24T07:59:07.746Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338896431?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Dav Pilkey",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338896435.jpg",
          "book_image_width": 338,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7302d9ab-baf2-5d43-bfdb-24c035aa60ed",
          "contributor": "by Dav Pilkey",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:08",
          "description": "The 12th book in the Dog Man series. Dog Man finds himself back on his hind legs after being sprayed by a skunk.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338896431",
          "primary_isbn13": "9781338896435",
          "publisher": "Scholastic",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE SCARLET SHEDDER",
          "updated_date": "2024-05-01 23:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338896431?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338896435?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338896435"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BSCARLET%2BSHEDDER%2FDav%2BPilkey%2F9781338896435"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338896435"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338896435?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372646",
          "list_name": "Graphic Books and Manga",
          "date": "2024-05-24T07:59:07.810Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=JUJUTSU+KAISEN%2C+VOL.+22+Gege+Akutami",
          "article_chapter_link": "",
          "author": "Gege Akutami",
          "book_image": null,
          "book_image_width": null,
          "book_image_height": null,
          "book_review_link": "",
          "book_uri": "nyt://book/966c26a5-e983-552b-b22e-122ee7df918a",
          "contributor": "by Gege Akutami",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:08",
          "description": "A cursed spirit threatens to put Maki and Noritoshi in danger.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1974743411",
          "primary_isbn13": "9781974743414",
          "publisher": "VIZ Media",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "JUJUTSU KAISEN, VOL. 22",
          "updated_date": "2024-05-01 23:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=JUJUTSU+KAISEN%2C+VOL.+22+Gege+Akutami"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781974743414?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781974743414"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FJUJUTSU%2BKAISEN%252C%2BVOL.%2B22%2FGege%2BAkutami%2F9781974743414"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781974743414"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781974743414?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae37265e",
          "list_name": "Graphic Books and Manga",
          "date": "2024-05-24T07:59:07.836Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338801910?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Dav Pilkey",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338801910.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/38aa45cc-2c25-57e9-9150-beae0acea89e",
          "contributor": "by Dav Pilkey",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:08",
          "description": "The 11th book in the Dog Man series. Piggy returns and the Supa Buddies are sabotaged.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338801910",
          "primary_isbn13": "9781338801910",
          "publisher": "Scholastic",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "TWENTY THOUSAND FLEAS UNDER THE SEA",
          "updated_date": "2024-05-01 23:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338801910?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338801910?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338801910"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTWENTY%2BTHOUSAND%2BFLEAS%2BUNDER%2BTHE%2BSEA%2FDav%2BPilkey%2F9781338801910"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338801910"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338801910?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372676",
          "list_name": "Graphic Books and Manga",
          "date": "2024-05-24T07:59:07.864Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338730924?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Tui T. Sutherland.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338730920.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/26602605-957a-504d-91a9-4f83aff9e9b6",
          "contributor": "by Tui T. Sutherland. Illustrated by Mike Holmes",
          "contributor_note": "Illustrated by Mike Holmes",
          "created_date": "2024-05-01 23:00:08",
          "description": "The seventh book in the Wings of Fire graphic novel series. Winter must face his family in the Ice Kingdom.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338730924",
          "primary_isbn13": "9781338730920",
          "publisher": "Scholastic",
          "rank": 4,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "WINTER TURNING",
          "updated_date": "2024-05-01 23:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338730924?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338730920?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338730920"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FWINTER%2BTURNING%2FTui%2BT.%2BSutherland.%2F9781338730920"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338730920"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338730920?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae37268e",
          "list_name": "Graphic Books and Manga",
          "date": "2024-05-24T07:59:07.902Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1338896393?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Dav Pilkey",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338896398.jpg",
          "book_image_width": 363,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/d62db906-6011-5ed8-a667-3e2f334b995f",
          "contributor": "by Dav Pilkey",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:08",
          "description": "The fifth book in the Cat Kid Comic Club series. As publication seems possible, the baby frogs feel doubt.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "",
          "primary_isbn13": "9781339050058",
          "publisher": "Scholastic",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "INFLUENCERS",
          "updated_date": "2024-05-01 23:00:08",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1338896393?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781339050058?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781339050058"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FINFLUENCERS%2FDav%2BPilkey%2F9781339050058"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781339050058"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781339050058?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Hardcover Fiction",
      "books": [
        {
          "_id": "643282b3e85766588626a1ec",
          "list_name": "Hardcover Fiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Shel Van Pelt",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063204157.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/206a5e83-12f4-5ea9-8e63-1da5470a6ef5",
          "contributor": "by Shelby Van Pelt",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:23",
          "description": "A widow working the night shift at the Sowell Bay Aquarium is aided in solving a mystery by a giant Pacific octopus living there.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0063204150",
          "primary_isbn13": "9780063204157",
          "publisher": "Ecco",
          "rank": 10,
          "rank_last_week": 11,
          "sunday_review_link": "",
          "title": "REMARKABLY BRIGHT CREATURES",
          "updated_date": "2023-04-05 22:10:13",
          "weeks_on_list": 11,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780063204157?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063204157"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FREMARKABLY%252BBRIGHT%252BCREATURES%252FShel%252BVan%252BPelt%252F9780063204157&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DREMARKABLY%252BBRIGHT%252BCREATURES%252BShel%252BVan%252BPelt"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063204157&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DREMARKABLY%2BBRIGHT%2BCREATURES"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063204157%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DREMARKABLY%2BBRIGHT%2BCREATURES%2BShel%2BVan%2BPelt%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6ac",
          "list_name": "Hardcover Fiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Kristin Hannah",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/9ce735af-71cf-5ff3-a367-43ee07e3fdd7",
          "contributor": "by Kristin Hannah",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:22",
          "description": "In 1965, a nursing student follows her brother to serve during the Vietnam War and returns to a divided America.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1250178630",
          "primary_isbn13": "9781250178633",
          "publisher": "St. Martin's",
          "rank": 1,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "THE WOMEN",
          "updated_date": "2024-03-20 22:24:50",
          "weeks_on_list": 6,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250178630?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250178633?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250178633"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMEN%2FKristin%2BHannah%2F9781250178633"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781250178633"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781250178633?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6d3",
          "list_name": "Hardcover Fiction",
          "date": "2024-05-24T07:59:08.764Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1649374046?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Yarros",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
          "book_image_width": 309,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/106c2cf0-7d20-51b1-bad4-91c3ebcd131a",
          "contributor": "by Rebecca Yarros",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:22",
          "description": "Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1649374046",
          "primary_isbn13": "9781649374042",
          "publisher": "Red Tower",
          "rank": 2,
          "rank_last_week": 2,
          "sunday_review_link": "",
          "title": "FOURTH WING",
          "updated_date": "2024-03-20 22:24:51",
          "weeks_on_list": 45,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1649374046?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781649374042?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374042"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFOURTH%2BWING%2FRebecca%2BYarros%2F9781649374042"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781649374042"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781649374042?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9ca957e5c1ae05b6ec",
          "list_name": "Hardcover Fiction",
          "date": "2024-05-24T07:59:08.822Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Yarros",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
          "book_image_width": 309,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/d3c570c9-3c3a-5c8b-a740-85ea5e92bfc9",
          "contributor": "by Rebecca Yarros",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:22",
          "description": "The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1649374178",
          "primary_isbn13": "9781649374172",
          "publisher": "Red Tower",
          "rank": 3,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "IRON FLAME",
          "updated_date": "2024-03-20 22:24:51",
          "weeks_on_list": 19,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1649374178?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781649374172?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374172"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIRON%2BFLAME%2FRebecca%2BYarros%2F9781649374172"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781649374172"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781649374172?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b73e",
          "list_name": "Hardcover Fiction",
          "date": "2024-05-24T07:59:08.667Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593422945?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "James McBride",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593422946.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7d47b076-7ad7-539c-a051-6664384636b9",
          "contributor": "by James McBride",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:22",
          "description": "Secrets held by the residents of a dilapidated neighborhood come to life when a skeleton is found at the bottom of a well.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593422945",
          "primary_isbn13": "9780593422946",
          "publisher": "Riverhead",
          "rank": 6,
          "rank_last_week": 8,
          "sunday_review_link": "",
          "title": "THE HEAVEN & EARTH GROCERY STORE",
          "updated_date": "2024-03-20 22:24:51",
          "weeks_on_list": 30,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593422945?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593422946?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593422946"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BHEAVEN%2B%2526%2BEARTH%2BGROCERY%2BSTORE%2FJames%2BMcBride%2F9780593422946"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593422946"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593422946?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Hardcover Nonfiction",
      "books": [
        {
          "_id": "643282b1e85766588626a0c0",
          "list_name": "Hardcover Nonfiction",
          "date": "2023-04-01T00:00:00.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Jennette McCurdy",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/be73b1c3-c238-5232-af55-bf70c59cb907",
          "contributor": "by Jennette McCurdy",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:26",
          "description": "The actress and filmmaker describes her eating disorders and difficult relationship with her mother.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1982185821",
          "primary_isbn13": "9781982185824",
          "publisher": "Simon & Schuster",
          "rank": 3,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "I'M GLAD MY MOM DIED",
          "updated_date": "2023-04-05 22:10:16",
          "weeks_on_list": 34,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781982185824?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982185824"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252FJennette%252BMcCurdy%252F9781982185824&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DI%252527M%252BGLAD%252BMY%252BMOM%252BDIED%252BJennette%252BMcCurdy"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982185824&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982185824%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DI%2527M%2BGLAD%2BMY%2BMOM%2BDIED%2BJennette%2BMcCurdy%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a07d",
          "list_name": "Hardcover Nonfiction",
          "date": "2024-05-24T07:59:08.712Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Peter Attia with Bill Gifford",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593236598.jpg",
          "book_image_width": 385,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/69f6e624-4f30-59d6-8103-816d17ae5ec1",
          "contributor": "by Peter Attia with Bill Gifford",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:26",
          "description": "A look at recent scientific research on aging and longevity.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593236599",
          "primary_isbn13": "9780593236598",
          "publisher": "Harmony",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "OUTLIVE",
          "updated_date": "2023-04-05 22:10:16",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593236599?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593236598?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593236598"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FOUTLIVE%252FPeter%252BAttia%252Bwith%252BBill%252BGifford%252F9780593236598&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DOUTLIVE%252BPeter%252BAttia%252Bwith%252BBill%252BGifford"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593236598&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DOUTLIVE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593236598%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DOUTLIVE%2BPeter%2BAttia%2Bwith%2BBill%2BGifford%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b773",
          "list_name": "Hardcover Nonfiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "David Grann",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534260.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/92ec85ca-4cff-59b6-94a3-b81002bfc8e6",
          "contributor": "by David Grann",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:25",
          "description": "The survivors of a shipwrecked British vessel on a secret mission during an imperial war with Spain have different accounts of events.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0385534264",
          "primary_isbn13": "9780385534260",
          "publisher": "Doubleday",
          "rank": 4,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "THE WAGER",
          "updated_date": "2024-03-20 22:24:54",
          "weeks_on_list": 47,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0385534264?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780385534260?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385534260"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWAGER%2FDavid%2BGrann%2F9780385534260"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780385534260"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780385534260?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "660df419a957e5c1ae0f5059",
          "list_name": "Hardcover Nonfiction",
          "date": "2024-05-24T07:59:07.825Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593655036?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Jonathan Haidt",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593655030.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7557cf43-7888-5c15-8206-d3541cccd89b",
          "contributor": "by Jonathan Haidt",
          "contributor_note": "",
          "created_date": "2024-04-03 22:20:25",
          "description": "A co-author of “The Coddling of the American Mind” looks at the mental health impacts that a phone-based life has on children.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593655036",
          "primary_isbn13": "9780593655030",
          "publisher": "Penguin Press",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE ANXIOUS GENERATION",
          "updated_date": "2024-04-03 22:24:49",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593655036?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593655030?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593655030"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BANXIOUS%2BGENERATION%2FJonathan%2BHaidt%2F9780593655030"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593655030"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593655030?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "660df419a957e5c1ae0f5040",
          "list_name": "Hardcover Nonfiction",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593655036?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Jonathan Haidt",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593655030.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7557cf43-7888-5c15-8206-d3541cccd89b",
          "contributor": "by Jonathan Haidt",
          "contributor_note": "",
          "created_date": "2024-04-03 22:20:25",
          "description": "A co-author of “The Coddling of the American Mind” looks at the mental health impacts that a phone-based life has on children.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593655036",
          "primary_isbn13": "9780593655030",
          "publisher": "Penguin Press",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE ANXIOUS GENERATION",
          "updated_date": "2024-04-03 22:24:49",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593655036?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593655030?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593655030"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BANXIOUS%2BGENERATION%2FJonathan%2BHaidt%2F9780593655030"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593655030"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593655030?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Mass Market Monthly",
      "books": [
        {
          "_id": "6632d16aa957e5c1ae372627",
          "list_name": "Mass Market Monthly",
          "date": "2024-05-24T07:59:07.746Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/198482189X?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Danielle Steel",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984821898.jpg",
          "book_image_width": 328,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/ae02b490-aefa-5ecf-ac2f-417c053b96fc",
          "contributor": "by Danielle Steel",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:17",
          "description": "Challenges arise when a young woman takes over her family’s haute couture Italian leather brand and 400-year-old palazzo in Venice.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1984821911",
          "primary_isbn13": "9781984821911",
          "publisher": "Dell",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "PALAZZO",
          "updated_date": "2024-05-01 23:00:17",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/198482189X?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781984821911?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984821911"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FPALAZZO%2FDanielle%2BSteel%2F9781984821911"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781984821911"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781984821911?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372644",
          "list_name": "Mass Market Monthly",
          "date": "2024-05-24T07:59:07.789Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0316485659?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Michael Connelly",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316485654.jpg",
          "book_image_width": 323,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/8576c3bc-c063-5aca-a750-c422fe94d274",
          "contributor": "by Michael Connelly",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:17",
          "description": "Ballard and Bosch bury old resentments as they go after two killers.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "153874046X",
          "primary_isbn13": "9781538740460",
          "publisher": "Grand Central",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "DESERT STAR",
          "updated_date": "2024-05-01 23:00:17",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0316485659?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781538740460?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538740460"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FDESERT%2BSTAR%2FMichael%2BConnelly%2F9781538740460"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781538740460"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781538740460?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae37265b",
          "list_name": "Mass Market Monthly",
          "date": "2024-05-24T07:59:07.813Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=PRIVATE+MOSCOW+James+Patterson+and+Adam+Hamdy",
          "article_chapter_link": "",
          "author": "James Patterson and Adam Hamdy",
          "book_image": null,
          "book_image_width": null,
          "book_image_height": null,
          "book_review_link": "",
          "book_uri": "nyt://book/75fb1c1d-c6a1-53e3-93ec-1750fc22c70b",
          "contributor": "by James Patterson and Adam Hamdy",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:17",
          "description": "The 15th book in the Private series. A murder in Moscow appears to be linked to one that happened inside the New York Stock Exchange.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1538752638",
          "primary_isbn13": "9781538752630",
          "publisher": "Grand Central",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "PRIVATE MOSCOW",
          "updated_date": "2024-05-01 23:00:17",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=PRIVATE+MOSCOW+James+Patterson+and+Adam+Hamdy"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781538752630?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538752630"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FPRIVATE%2BMOSCOW%2FJames%2BPatterson%2Band%2BAdam%2BHamdy%2F9781538752630"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781538752630"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781538752630?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372674",
          "list_name": "Mass Market Monthly",
          "date": "2024-05-24T07:59:07.841Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=THE+WINNER+David+Baldacci",
          "article_chapter_link": "",
          "author": "David Baldacci",
          "book_image": null,
          "book_image_width": null,
          "book_image_height": null,
          "book_review_link": "",
          "book_uri": "nyt://book/d2af35d2-7b4a-5e9e-bbfd-cb3cc298cb61",
          "contributor": "by David Baldacci",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:17",
          "description": "LuAnn Tyler deals with the consequences of breaking a promise that paid her a $100 million lottery jackpot.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1538768887",
          "primary_isbn13": "9781538768884",
          "publisher": "Grand Central",
          "rank": 4,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE WINNER",
          "updated_date": "2024-05-01 23:00:17",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/gp/search?index=books&tag=thenewyorktim-20&field-keywords=THE+WINNER+David+Baldacci"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781538768884?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538768884"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWINNER%2FDavid%2BBaldacci%2F9781538768884"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781538768884"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781538768884?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae37268c",
          "list_name": "Mass Market Monthly",
          "date": "2024-05-24T07:59:07.868Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0063010100?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "J.A. Jance",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063010116.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/7cec4185-8d60-573e-b55e-a715e61c66ad",
          "contributor": "by J.A. Jance",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:17",
          "description": "Sheriff Joanna Brady assists a federal investigator who finds resonance between a cold case he is assigned and his family's past.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0063022672",
          "primary_isbn13": "9780063022676",
          "publisher": "Morrow",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "BLESSING OF THE LOST GIRLS",
          "updated_date": "2024-05-01 23:00:17",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0063010100?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780063022676?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063022676"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FBLESSING%2BOF%2BTHE%2BLOST%2BGIRLS%2FJ.A.%2BJance%2F9780063022676"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780063022676"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780063022676?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Middle Grade Paperback Monthly",
      "books": [
        {
          "_id": "66443242a957e5c1ae483c0e",
          "list_name": "Middle Grade Paperback Monthly",
          "date": "2024-05-24T07:59:07.747Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/000868071X?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Chas Newkey-Burden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780008680718.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/22d2dd8d-0c32-5bbb-a432-695b30d2d449",
          "contributor": "by Chas Newkey-Burden",
          "contributor_note": "",
          "created_date": "2024-05-14 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "000868071X",
          "primary_isbn13": "9780008680718",
          "publisher": "HarperCollins",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "TAYLOR SWIFT: THE WHOLE STORY",
          "updated_date": "2024-05-14 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/000868071X?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780008680718?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780008680718"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTAYLOR%2BSWIFT%253A%2BTHE%2BWHOLE%2BSTORY%2FChas%2BNewkey-Burden%2F9780008680718"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780008680718"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780008680718?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66443242a957e5c1ae483c22",
          "list_name": "Middle Grade Paperback Monthly",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/000868071X?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Chas Newkey-Burden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780008680718.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/22d2dd8d-0c32-5bbb-a432-695b30d2d449",
          "contributor": "by Chas Newkey-Burden",
          "contributor_note": "",
          "created_date": "2024-05-14 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "000868071X",
          "primary_isbn13": "9780008680718",
          "publisher": "HarperCollins",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "TAYLOR SWIFT: THE WHOLE STORY",
          "updated_date": "2024-05-14 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/000868071X?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780008680718?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780008680718"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTAYLOR%2BSWIFT%253A%2BTHE%2BWHOLE%2BSTORY%2FChas%2BNewkey-Burden%2F9780008680718"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780008680718"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780008680718?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66443242a957e5c1ae483c46",
          "list_name": "Middle Grade Paperback Monthly",
          "date": "2024-05-24T07:59:07.797Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Linda Sue Park",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780547577319.jpg",
          "book_image_width": 328,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/72728168-095d-521b-90d2-2380bdc74220",
          "contributor": "by Linda Sue Park",
          "contributor_note": "",
          "created_date": "2024-05-14 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0547577311",
          "primary_isbn13": "9780547577319",
          "publisher": "Clarion",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "A LONG WALK TO WATER",
          "updated_date": "2024-05-14 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780547577319?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780547577319"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FA%2BLONG%2BWALK%2BTO%2BWATER%2FLinda%2BSue%2BPark%2F9780547577319"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780547577319"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780547577319?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66443242a957e5c1ae483c50",
          "list_name": "Middle Grade Paperback Monthly",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Linda Sue Park",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780547577319.jpg",
          "book_image_width": 328,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/72728168-095d-521b-90d2-2380bdc74220",
          "contributor": "by Linda Sue Park",
          "contributor_note": "",
          "created_date": "2024-05-14 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0547577311",
          "primary_isbn13": "9780547577319",
          "publisher": "Clarion",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "A LONG WALK TO WATER",
          "updated_date": "2024-05-14 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780547577319?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780547577319"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FA%2BLONG%2BWALK%2BTO%2BWATER%2FLinda%2BSue%2BPark%2F9780547577319"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780547577319"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780547577319?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66443242a957e5c1ae483c6c",
          "list_name": "Middle Grade Paperback Monthly",
          "date": "2024-05-24T07:59:07.826Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Restart-Gordon-Korman/dp/1338053809?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Gordon Korman",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338053807.jpg",
          "book_image_width": 330,
          "book_image_height": 480,
          "book_review_link": "",
          "book_uri": "nyt://book/33e0a0a4-8158-58ef-9e88-1c49b4167580",
          "contributor": "by Gordon Korman",
          "contributor_note": "",
          "created_date": "2024-05-14 23:00:06",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1338053809",
          "primary_isbn13": "9781338053807",
          "publisher": "Scholastic",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "RESTART",
          "updated_date": "2024-05-14 23:00:06",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Restart-Gordon-Korman/dp/1338053809?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781338053807?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338053807"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FRESTART%2FGordon%2BKorman%2F9781338053807"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781338053807"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781338053807?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Paperback Nonfiction",
      "books": [
        {
          "_id": "643282b2e85766588626a108",
          "list_name": "Paperback Nonfiction",
          "date": "2024-05-24T07:59:09.617Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "bell hooks",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780060959470.jpg",
          "book_image_width": 319,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/84ce374b-f6b1-5f05-8556-b0e09e97679c",
          "contributor": "by bell hooks",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "The late feminist icon explores the causes of a polarized society and the meaning of love.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0060959479",
          "primary_isbn13": "9780060959470",
          "publisher": "Morrow",
          "rank": 3,
          "rank_last_week": 2,
          "sunday_review_link": "https://www.nytimes.com/2000/01/30/books/that-4-letter-word.html",
          "title": "ALL ABOUT LOVE",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 69,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0060959479?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780060959470?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780060959470"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FALL%252BABOUT%252BLOVE%252Fbell%252Bhooks%252F9780060959470&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DALL%252BABOUT%252BLOVE%252Bbell%252Bhooks"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780060959470&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DALL%2BABOUT%2BLOVE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780060959470%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DALL%2BABOUT%2BLOVE%2Bbell%2Bhooks%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a128",
          "list_name": "Paperback Nonfiction",
          "date": "2024-05-24T07:59:07.935Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Robin Wall Kimmerer",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
          "book_image_width": 321,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/194ea111-42ad-5795-9fb5-3e155ffa5e79",
          "contributor": "by Robin Wall Kimmerer",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1571313567",
          "primary_isbn13": "9781571313560",
          "publisher": "Milkweed Editions",
          "rank": 4,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "BRAIDING SWEETGRASS",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 155,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781571313560?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781571313560"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBRAIDING%252BSWEETGRASS%252FRobin%252BWall%252BKimmerer%252F9781571313560&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBRAIDING%252BSWEETGRASS%252BRobin%252BWall%252BKimmerer"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781571313560&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DBRAIDING%2BSWEETGRASS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781571313560%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBRAIDING%2BSWEETGRASS%2BRobin%2BWall%2BKimmerer%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a07f",
          "list_name": "Paperback Nonfiction",
          "date": "2024-05-24T07:59:07.925Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Bessel van der Kolk",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
          "book_image_width": 128,
          "book_image_height": 193,
          "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
          "book_uri": "nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e",
          "contributor": "by Bessel van der Kolk",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "How trauma affects the body and mind, and innovative treatments for recovery.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0143127748",
          "primary_isbn13": "9780143127741",
          "publisher": "Penguin",
          "rank": 1,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "THE BODY KEEPS THE SCORE",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 232,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780143127741?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b4e85766588626a234",
          "list_name": "Paperback Nonfiction",
          "date": "2024-05-24T07:59:08.648Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Dolly Alderton",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062968791.jpg",
          "book_image_width": 332,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/78725ce3-7ae4-5a35-acad-04355f2d0b44",
          "contributor": "by Dolly Alderton",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:28",
          "description": "The British journalist shares stories and observations; the basis of the TV series.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0062968793",
          "primary_isbn13": "9780062968791",
          "publisher": "Harper Perennial",
          "rank": 14,
          "rank_last_week": 13,
          "sunday_review_link": "",
          "title": "EVERYTHING I KNOW ABOUT LOVE",
          "updated_date": "2023-04-05 22:10:18",
          "weeks_on_list": 2,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0062968793?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780062968791?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062968791"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FEVERYTHING%252BI%252BKNOW%252BABOUT%252BLOVE%252FDolly%252BAlderton%252F9780062968791&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DEVERYTHING%252BI%252BKNOW%252BABOUT%252BLOVE%252BDolly%252BAlderton"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062968791&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DEVERYTHING%2BI%2BKNOW%2BABOUT%2BLOVE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062968791%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DEVERYTHING%2BI%2BKNOW%2BABOUT%2BLOVE%2BDolly%2BAlderton%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a170",
          "list_name": "Paperback Nonfiction",
          "date": "2024-05-24T07:59:07.811Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "David Grann",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",
          "book_image_width": 326,
          "book_image_height": 495,
          "book_review_link": "https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html",
          "book_uri": "nyt://book/c5c1cd05-cdbc-5e7a-8255-1923ab4b1ceb",
          "contributor": "by David Grann",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:28",
          "description": "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0307742482",
          "primary_isbn13": "9780307742483",
          "publisher": "Vintage",
          "rank": 6,
          "rank_last_week": 14,
          "sunday_review_link": "",
          "title": "KILLERS OF THE FLOWER MOON",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 109,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780307742483?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780307742483"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252FDavid%252BGrann%252F9780307742483&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DKILLERS%252BOF%252BTHE%252BFLOWER%252BMOON%252BDavid%252BGrann"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780307742483&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780307742483%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON%2BDavid%2BGrann%26aff%3DNYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Picture Books",
      "books": [
        {
          "_id": "643282b2e85766588626a16a",
          "list_name": "Picture Books",
          "date": "2024-05-24T07:59:07.815Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/The-Wonderful-Things-You-Will/dp/0385376715?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Emily Winfield Martin",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385376716.jpg",
          "book_image_width": 330,
          "book_image_height": 347,
          "book_review_link": "",
          "book_uri": "nyt://book/36cac861-60d3-511f-ba6d-edc88c6e938e",
          "contributor": "by Emily Winfield Martin",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:28",
          "description": "A celebration of future possibilities.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0385376715",
          "primary_isbn13": "9780385376716",
          "publisher": "Random House",
          "rank": 8,
          "rank_last_week": 7,
          "sunday_review_link": "",
          "title": "THE WONDERFUL THINGS YOU WILL BE",
          "updated_date": "2023-04-05 22:10:18",
          "weeks_on_list": 346,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/The-Wonderful-Things-You-Will/dp/0385376715?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780385376716?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385376716"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BWONDERFUL%252BTHINGS%252BYOU%252BWILL%252BBE%252FEmily%252BWinfield%252BMartin%252F9780385376716&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BWONDERFUL%252BTHINGS%252BYOU%252BWILL%252BBE%252BEmily%252BWinfield%252BMartin"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385376716&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BWONDERFUL%2BTHINGS%2BYOU%2BWILL%2BBE"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385376716%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BWONDERFUL%2BTHINGS%2BYOU%2BWILL%2BBE%2BEmily%2BWinfield%2BMartin%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66208de3a957e5c1ae269cd9",
          "list_name": "Picture Books",
          "date": "2024-05-24T07:59:07.840Z",
          "age_group": "Ages 5 to 8",
          "amazon_product_url": "http://www.amazon.com/What-Do-You-Idea/dp/1938298071?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Kobi Yamada.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781938298073.jpg",
          "book_image_width": 330,
          "book_image_height": 393,
          "book_review_link": "",
          "book_uri": "nyt://book/cffb99f7-9d6d-5809-977e-4c53d58b60a1",
          "contributor": "by Kobi Yamada. Illustrated by Mae Besom",
          "contributor_note": "Illustrated by Mae Besom",
          "created_date": "2024-04-17 22:20:33",
          "description": "Giving a new idea the room to grow. (Ages 5 to 8)",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1957891343",
          "primary_isbn13": "9781957891347",
          "publisher": "Compendium",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "WHAT DO YOU DO WITH AN IDEA?",
          "updated_date": "2024-04-17 22:25:37",
          "weeks_on_list": 48,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/What-Do-You-Idea/dp/1938298071?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781957891347?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781957891347"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FWHAT%2BDO%2BYOU%2BDO%2BWITH%2BAN%2BIDEA%253F%2FKobi%2BYamada.%2F9781957891347"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781957891347"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781957891347?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "663c23c5a957e5c1ae3ecb35",
          "list_name": "Picture Books",
          "date": "2024-05-24T07:59:07.788Z",
          "age_group": "Ages 4 to 7",
          "amazon_product_url": "https://www.amazon.com/Because-Had-Teacher-teachers-everywhere/dp/1943200084?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Kobi Yamada.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781943200085.jpg",
          "book_image_width": 330,
          "book_image_height": 330,
          "book_review_link": "",
          "book_uri": "nyt://book/b4c3cb4e-6aa2-5cbf-b314-48274c249dc3",
          "contributor": "by Kobi Yamada. Illustrated by Natalie Russell",
          "contributor_note": "Illustrated by Natalie Russell",
          "created_date": "2024-05-08 22:20:30",
          "description": "An ode to teachers. (Ages 4 to 7)",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1943200084",
          "primary_isbn13": "9781943200085",
          "publisher": "Compendium",
          "rank": 4,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "BECAUSE I HAD A TEACHER",
          "updated_date": "2024-05-08 22:25:21",
          "weeks_on_list": 18,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Because-Had-Teacher-teachers-everywhere/dp/1943200084?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781943200085?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781943200085"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FBECAUSE%2BI%2BHAD%2BA%2BTEACHER%2FKobi%2BYamada.%2F9781943200085"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781943200085"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781943200085?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "663c23c5a957e5c1ae3ecb4c",
          "list_name": "Picture Books",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "Ages 4 to 7",
          "amazon_product_url": "https://www.amazon.com/Because-Had-Teacher-teachers-everywhere/dp/1943200084?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Kobi Yamada.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781943200085.jpg",
          "book_image_width": 330,
          "book_image_height": 330,
          "book_review_link": "",
          "book_uri": "nyt://book/b4c3cb4e-6aa2-5cbf-b314-48274c249dc3",
          "contributor": "by Kobi Yamada. Illustrated by Natalie Russell",
          "contributor_note": "Illustrated by Natalie Russell",
          "created_date": "2024-05-08 22:20:30",
          "description": "An ode to teachers. (Ages 4 to 7)",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1943200084",
          "primary_isbn13": "9781943200085",
          "publisher": "Compendium",
          "rank": 4,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "BECAUSE I HAD A TEACHER",
          "updated_date": "2024-05-08 22:25:21",
          "weeks_on_list": 18,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/Because-Had-Teacher-teachers-everywhere/dp/1943200084?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781943200085?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781943200085"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FBECAUSE%2BI%2BHAD%2BA%2BTEACHER%2FKobi%2BYamada.%2F9781943200085"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781943200085"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781943200085?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "663c23c6a957e5c1ae3ecbbc",
          "list_name": "Picture Books",
          "date": "2024-05-24T07:59:07.745Z",
          "age_group": "Ages 5 to 8",
          "amazon_product_url": "http://www.amazon.com/Wish-You-More-Krouse-Rosenthal/dp/1452126992?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Amy Krouse Rosenthal.",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781452126999.jpg",
          "book_image_width": 330,
          "book_image_height": 330,
          "book_review_link": "",
          "book_uri": "nyt://book/8ebc86f7-f391-5225-bf8c-23b4556889f7",
          "contributor": "by Amy Krouse Rosenthal. Illustrated by Tom Lichtenheld",
          "contributor_note": "Illustrated by Tom Lichtenheld",
          "created_date": "2024-05-08 22:20:30",
          "description": "A bounty of good wishes. (Ages 5 to 8)",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1452126992",
          "primary_isbn13": "9781452126999",
          "publisher": "Chronicle",
          "rank": 7,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "I WISH YOU MORE",
          "updated_date": "2024-05-08 22:25:21",
          "weeks_on_list": 88,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Wish-You-More-Krouse-Rosenthal/dp/1452126992?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781452126999?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781452126999"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FI%2BWISH%2BYOU%2BMORE%2FAmy%2BKrouse%2BRosenthal.%2F9781452126999"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781452126999"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781452126999?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Series Books",
      "books": [
        {
          "_id": "643282b1e85766588626a0ae",
          "list_name": "Series Books",
          "date": "2024-05-24T07:59:07.745Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Holly Jackson",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593379851.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/494423b3-84b1-5f41-ae97-b525e4a5245c",
          "contributor": "by Holly Jackson",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:24",
          "description": "Pippa Fitz-Amobi solves murderous crimes.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1984896393",
          "primary_isbn13": "9781984896391",
          "publisher": "Delacorte",
          "rank": 2,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "A GOOD GIRL'S GUIDE TO MURDER",
          "updated_date": "2023-04-05 22:10:13",
          "weeks_on_list": 79,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781984896391?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984896391"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FA%252BGOOD%252BGIRL%252527S%252BGUIDE%252BTO%252BMURDER%252FHolly%252BJackson%252F9781984896391&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DA%252BGOOD%252BGIRL%252527S%252BGUIDE%252BTO%252BMURDER%252BHolly%252BJackson"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984896391&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DA%2BGOOD%2BGIRL%2527S%2BGUIDE%2BTO%2BMURDER"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984896391%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DA%2BGOOD%2BGIRL%2527S%2BGUIDE%2BTO%2BMURDER%2BHolly%2BJackson%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b1e85766588626a083",
          "list_name": "Series Books",
          "date": "2024-05-24T07:59:07.817Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "and   Jeff Kinney",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781419711329.jpg",
          "book_image_width": 330,
          "book_image_height": 484,
          "book_review_link": "",
          "book_uri": "nyt://book/cb1d1f95-72fb-51ba-a5d1-fb54457d7ad9",
          "contributor": "written and illustrated by Jeff Kinney",
          "contributor_note": "written and illustrated by Jeff Kinney",
          "created_date": "2023-04-05 22:05:24",
          "description": "The travails and challenges of adolescence.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "141976294X",
          "primary_isbn13": "9781419762949",
          "publisher": "Amulet",
          "rank": 1,
          "rank_last_week": 2,
          "sunday_review_link": "",
          "title": "DIARY OF A WIMPY KID",
          "updated_date": "2023-04-05 22:10:13",
          "weeks_on_list": 733,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781419762949?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419762949"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDIARY%252BOF%252BA%252BWIMPY%252BKID%252Fand%252B%252B%252BJeff%252BKinney%252F9781419762949&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDIARY%252BOF%252BA%252BWIMPY%252BKID%252Band%252B%252B%252BJeff%252BKinney"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781419762949&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDIARY%2BOF%2BA%2BWIMPY%2BKID"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781419762949%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDIARY%2BOF%2BA%2BWIMPY%2BKID%2Band%2B%2B%2BJeff%2BKinney%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a14c",
          "list_name": "Series Books",
          "date": "2024-05-24T07:59:08.614Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Titans-Curse-Percy-Jackson-Olympians/dp/1423101480?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rick Riordan",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781423131892.jpg",
          "book_image_width": 319,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/e2b52b1b-5fd1-5235-ba04-4be032845359",
          "contributor": "by Rick Riordan",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:24",
          "description": "A boy battles mythological monsters.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1484707230",
          "primary_isbn13": "9781484707234",
          "publisher": "Disney-Hyperion",
          "rank": 7,
          "rank_last_week": 8,
          "sunday_review_link": "https://www.nytimes.com/2009/05/31/books/review/Devereaux-t.html",
          "title": "PERCY JACKSON & THE OLYMPIANS",
          "updated_date": "2023-04-05 22:10:14",
          "weeks_on_list": 667,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Titans-Curse-Percy-Jackson-Olympians/dp/1423101480?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781484707234?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781484707234"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPERCY%252BJACKSON%252B%252526%252BTHE%252BOLYMPIANS%252FRick%252BRiordan%252F9781484707234&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPERCY%252BJACKSON%252B%252526%252BTHE%252BOLYMPIANS%252BRick%252BRiordan"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781484707234&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DPERCY%2BJACKSON%2B%2526%2BTHE%2BOLYMPIANS"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781484707234%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPERCY%2BJACKSON%2B%2526%2BTHE%2BOLYMPIANS%2BRick%2BRiordan%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b2e85766588626a0ee",
          "list_name": "Series Books",
          "date": "2024-05-24T07:59:08.726Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "J.K. Rowling",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780590353427.jpg",
          "book_image_width": 328,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/17005581-f735-545e-acaf-79dcfdd25a1f",
          "contributor": "by J.K. Rowling",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:24",
          "description": "A wizard hones his conjuring skills in the service of fighting evil.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "059035342X",
          "primary_isbn13": "9780590353427",
          "publisher": "Scholastic",
          "rank": 4,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "HARRY POTTER",
          "updated_date": "2023-04-05 22:10:13",
          "weeks_on_list": 732,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780590353427?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780590353427"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHARRY%252BPOTTER%252FJ.K.%252BRowling%252F9780590353427&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHARRY%252BPOTTER%252BJ.K.%252BRowling"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780590353427&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHARRY%2BPOTTER"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780590353427%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHARRY%2BPOTTER%2BJ.K.%2BRowling%26aff%3DNYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "643282b3e85766588626a186",
          "list_name": "Series Books",
          "date": "2024-05-24T07:59:08.649Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/Well-Always-Summer-Turned-Pretty/dp/1416995587?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Jenny Han",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781416995586.jpg",
          "book_image_width": 266,
          "book_image_height": 400,
          "book_review_link": "",
          "book_uri": "nyt://book/b2a63312-5fe9-57ac-a6d8-bdd2698762f3",
          "contributor": "by Jenny Han",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:24",
          "description": "A beach house, summer love and enduring friendships.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1416968296",
          "primary_isbn13": "9781416968290",
          "publisher": "Simon & Schuster",
          "rank": 9,
          "rank_last_week": 9,
          "sunday_review_link": "",
          "title": "THE SUMMER I TURNED PRETTY TRILOGY",
          "updated_date": "2023-04-05 22:10:14",
          "weeks_on_list": 50,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/Well-Always-Summer-Turned-Pretty/dp/1416995587?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781416968290?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781416968290"
            },
            {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSUMMER%252BI%252BTURNED%252BPRETTY%252BTRILOGY%252FJenny%252BHan%252F9781416968290&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSUMMER%252BI%252BTURNED%252BPRETTY%252BTRILOGY%252BJenny%252BHan"
            },
            {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781416968290&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BSUMMER%2BI%2BTURNED%2BPRETTY%2BTRILOGY"
            },
            {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781416968290%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSUMMER%2BI%2BTURNED%2BPRETTY%2BTRILOGY%2BJenny%2BHan%26aff%3DNYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Trade Fiction Paperback",
      "books": [
        {
          "_id": "65fc3c9da957e5c1ae05b6f2",
          "list_name": "Trade Fiction Paperback",
          "date": "2024-05-24T07:59:09.620Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Emily Henry",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593441275.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/0f245497-9fba-598a-9f85-b482f86a24a1",
          "contributor": "by Emily Henry",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "A former couple pretend to be together for the sake of their friends during their annual getaway in Maine.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593441192",
          "primary_isbn13": "9780593441190",
          "publisher": "Berkley",
          "rank": 2,
          "rank_last_week": 1,
          "sunday_review_link": "",
          "title": "HAPPY PLACE",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 2,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593441273?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593441190?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593441190"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FHAPPY%2BPLACE%2FEmily%2BHenry%2F9780593441190"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593441190"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593441190?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b741",
          "list_name": "Trade Fiction Paperback",
          "date": "2024-05-24T07:59:07.856Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1538742578?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Freida McFadden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538742570.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/34b29640-4b8c-59a9-8cf8-470356da1e2f",
          "contributor": "by Freida McFadden",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "Troubles surface when a woman looking to make a fresh start takes a job in the home of the Winchesters.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1538742578",
          "primary_isbn13": "9781538742570",
          "publisher": "Grand Central",
          "rank": 5,
          "rank_last_week": 5,
          "sunday_review_link": "",
          "title": "THE HOUSEMAID",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 47,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1538742578?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781538742570?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538742570"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BHOUSEMAID%2FFreida%2BMcFadden%2F9781538742570"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781538742570"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781538742570?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b75d",
          "list_name": "Trade Fiction Paperback",
          "date": "2024-05-24T07:59:08.691Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1728274869?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Ana Huang",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781728274867.jpg",
          "book_image_width": 324,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/a35bd823-6ed5-5efa-81e6-a8eddc06bad9",
          "contributor": "by Ana Huang",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:25",
          "description": "The first book in the Twisted series. Secrets emerge when Ava explores things with her brother’s best friend.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1728274869",
          "primary_isbn13": "9781728274867",
          "publisher": "Bloom",
          "rank": 6,
          "rank_last_week": 7,
          "sunday_review_link": "",
          "title": "TWISTED LOVE",
          "updated_date": "2024-03-20 22:24:54",
          "weeks_on_list": 40,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1728274869?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781728274867?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781728274867"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTWISTED%2BLOVE%2FAna%2BHuang%2F9781728274867"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781728274867"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781728274867?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b77c",
          "list_name": "Trade Fiction Paperback",
          "date": "2024-03-21T13:55:07.000Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Freida McFadden",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781728296210.jpg",
          "book_image_width": 313,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/85e8b9be-4878-543a-874b-6b5a27292e8c",
          "contributor": "by Freida McFadden",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:25",
          "description": "A math teacher at Caseham High suspects there is more going on behind a scandal involving a teacher and a student.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1728296218",
          "primary_isbn13": "9781728296210",
          "publisher": "Poisoned Pen",
          "rank": 7,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "THE TEACHER",
          "updated_date": "2024-03-20 22:24:54",
          "weeks_on_list": 6,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1728296218?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781728296210?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781728296210"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BTEACHER%2FFreida%2BMcFadden%2F9781728296210"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781728296210"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781728296210?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "66173ba6a957e5c1ae1bd9f9",
          "list_name": "Trade Fiction Paperback",
          "date": "2024-05-24T07:59:08.645Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1538704439?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Ab Jimenez",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538704431.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/552fcc09-0ce5-5f51-a285-03421ce01b5d",
          "contributor": "by Abby Jimenez",
          "contributor_note": "",
          "created_date": "2024-04-10 22:20:28",
          "description": "Justin and Emma, whose exes find soulmates after breaking up with them, have a fling on a private island on Lake Minnetonka.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1538704439",
          "primary_isbn13": "9781538704431",
          "publisher": "Forever",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "JUST FOR THE SUMMER",
          "updated_date": "2024-04-10 22:25:26",
          "weeks_on_list": 1,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1538704439?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781538704431?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538704431"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FJUST%2BFOR%2BTHE%2BSUMMER%2FAb%2BJimenez%2F9781538704431"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781538704431"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781538704431?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Young Adult Hardcover",
      "books": [
        {
          "_id": "65fc3c9ca957e5c1ae05b6b2",
          "list_name": "Young Adult Hardcover",
          "date": "2024-05-24T07:59:07.745Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1665954884?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Lauren Roberts",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781665955997.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/3dcb864b-e0cf-5133-9ebe-f4cc1c5a68af",
          "contributor": "by Lauren Roberts",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "Forbidden love is in the air when Paedyn, an Ordinary, and Kai, an Elite, become romantically involved.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1665954884",
          "primary_isbn13": "9781665954884",
          "publisher": "Simon & Schuster",
          "rank": 1,
          "rank_last_week": 2,
          "sunday_review_link": "",
          "title": "POWERLESS",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 19,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1665954884?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781665954884?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781665954884"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FPOWERLESS%2FLauren%2BRoberts%2F9781665954884"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781665954884"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781665954884?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b6f6",
          "list_name": "Young Adult Hardcover",
          "date": "2024-05-24T07:59:07.823Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250857430?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Ross",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250857439.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/4e2ba9dd-e1e3-510d-9830-66259b3e98ec",
          "contributor": "by Rebecca Ross",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "Two young rival journalists find love through a magical connection.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1250857430",
          "primary_isbn13": "9781250857439",
          "publisher": "Wednesday",
          "rank": 3,
          "rank_last_week": 3,
          "sunday_review_link": "",
          "title": "DIVINE RIVALS",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 39,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250857430?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250857439?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250857439"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FDIVINE%2BRIVALS%2FRebecca%2BRoss%2F9781250857439"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781250857439"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781250857439?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b711",
          "list_name": "Young Adult Hardcover",
          "date": "2024-05-24T07:59:07.929Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1250857457?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Rebecca Ross",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250857453.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/6cc4781a-c41b-50d3-96d2-2e392eb58c1e",
          "contributor": "by Rebecca Ross",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "In the sequel to \"Divine Rivals,\" Roman and Iris will risk their hearts and futures to change the tides of the war.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1250857457",
          "primary_isbn13": "9781250857453",
          "publisher": "Wednesday",
          "rank": 4,
          "rank_last_week": 4,
          "sunday_review_link": "",
          "title": "RUTHLESS VOWS",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 12,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1250857457?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781250857453?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250857453"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FRUTHLESS%2BVOWS%2FRebecca%2BRoss%2F9781250857453"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781250857453"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781250857453?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b72d",
          "list_name": "Young Adult Hardcover",
          "date": "2024-05-24T07:59:08.696Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593650867?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Christopher Paolini",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593650868.jpg",
          "book_image_width": 339,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/dbe6d89b-d545-5cd6-a562-618f9467a2aa",
          "contributor": "by Christopher Paolini",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "Murtagh and his dragon, Thorn, must find and outwit a mysterious witch.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593650867",
          "primary_isbn13": "9780593650868",
          "publisher": "Knopf",
          "rank": 5,
          "rank_last_week": 5,
          "sunday_review_link": "",
          "title": "MURTAGH",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 19,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593650867?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593650868?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593650868"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FMURTAGH%2FChristopher%2BPaolini%2F9780593650868"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593650868"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593650868?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "65fc3c9da957e5c1ae05b767",
          "list_name": "Young Adult Hardcover",
          "date": "2024-05-24T07:59:08.666Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1419760904?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Alex Aster",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781419760907.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/1e996160-cc1c-55fd-9c20-5188be1178ba",
          "contributor": "by Alex Aster",
          "contributor_note": "",
          "created_date": "2024-03-20 22:20:24",
          "description": "In this sequel to \"Lightlark,\" Isla must chose between her two powerful lovers.",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1419760904",
          "primary_isbn13": "9781419760907",
          "publisher": "Amulet",
          "rank": 7,
          "rank_last_week": 10,
          "sunday_review_link": "",
          "title": "NIGHTBANE",
          "updated_date": "2024-03-20 22:24:53",
          "weeks_on_list": 19,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1419760904?tag=NYTBSREV-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781419760907?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419760907"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FNIGHTBANE%2FAlex%2BAster%2F9781419760907"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781419760907"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781419760907?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    },
    {
      "list_name": "Young Adult Paperback Monthly",
      "books": [
        {
          "_id": "6632d16aa957e5c1ae372628",
          "list_name": "Young Adult Paperback Monthly",
          "date": "2024-05-24T07:59:07.747Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1728276225?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Laura Nowlin",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781728276229.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/596bbc7d-3bb4-5aa5-955d-1a8a4a56369c",
          "contributor": "by Laura Nowlin",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1728276225",
          "primary_isbn13": "9781728276229",
          "publisher": "Sourcebooks Fire",
          "rank": 1,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "IF ONLY I HAD TOLD HER",
          "updated_date": "2024-05-01 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1728276225?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781728276229?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781728276229"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIF%2BONLY%2BI%2BHAD%2BTOLD%2BHER%2FLaura%2BNowlin%2F9781728276229"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781728276229"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781728276229?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372642",
          "list_name": "Young Adult Paperback Monthly",
          "date": "2024-05-24T07:59:07.791Z",
          "age_group": "",
          "amazon_product_url": "http://www.amazon.com/If-He-Had-Been-Me-ebook/dp/B00APIVOIE?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Laura Nowlin",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781402277832.jpg",
          "book_image_width": 330,
          "book_image_height": 495,
          "book_review_link": "",
          "book_uri": "nyt://book/06b8daaf-e835-5d8a-b7fc-fc6ad002bef2",
          "contributor": "by Laura Nowlin",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1728205484",
          "primary_isbn13": "9781728205489",
          "publisher": "Sourcebooks Fire",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "IF HE HAD BEEN WITH ME",
          "updated_date": "2024-05-01 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "http://www.amazon.com/If-He-Had-Been-Me-ebook/dp/B00APIVOIE?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781728205489?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781728205489"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIF%2BHE%2BHAD%2BBEEN%2BWITH%2BME%2FLaura%2BNowlin%2F9781728205489"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781728205489"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781728205489?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372658",
          "list_name": "Young Adult Paperback Monthly",
          "date": "2024-05-24T07:59:07.819Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1534467637?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Lynn Painter",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781534467637.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/1bf449fc-40e6-556e-8e7a-f4dc8ea61c3a",
          "contributor": "by Lynn Painter",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1534467637",
          "primary_isbn13": "9781534467637",
          "publisher": "Simon & Schuster",
          "rank": 3,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "BETTER THAN THE MOVIES",
          "updated_date": "2024-05-01 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1534467637?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781534467637?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781534467637"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FBETTER%2BTHAN%2BTHE%2BMOVIES%2FLynn%2BPainter%2F9781534467637"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781534467637"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781534467637?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae372672",
          "list_name": "Young Adult Paperback Monthly",
          "date": "2024-05-24T07:59:07.851Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/1419760874?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Alex Aster",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9781419760877.jpg",
          "book_image_width": 333,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/072a11c1-910e-5bfb-8bcb-b8850052e9c1",
          "contributor": "by Alex Aster",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "1419760874",
          "primary_isbn13": "9781419760877",
          "publisher": "Amulet",
          "rank": 4,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "LIGHTLARK",
          "updated_date": "2024-05-01 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/1419760874?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9781419760877?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419760877"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FLIGHTLARK%2FAlex%2BAster%2F9781419760877"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9781419760877"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9781419760877?aff=NYT"
            }
          ],
          "__v": 0
        },
        {
          "_id": "6632d16aa957e5c1ae37268a",
          "list_name": "Young Adult Paperback Monthly",
          "date": "2024-05-24T07:59:07.879Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0593374169?tag=thenewyorktim-20",
          "article_chapter_link": "",
          "author": "Holly Jackson",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593374160.jpg",
          "book_image_width": 331,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/5c13aa1d-6183-5941-88fb-ca15e93017fe",
          "contributor": "by Holly Jackson",
          "contributor_note": "",
          "created_date": "2024-05-01 23:00:05",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0593374193",
          "primary_isbn13": "9780593374191",
          "publisher": "Ember",
          "rank": 5,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "FIVE SURVIVE",
          "updated_date": "2024-05-01 23:00:05",
          "weeks_on_list": 0,
          "buy_links": [
            {
              "name": "Amazon",
              "url": "https://www.amazon.com/dp/0593374169?tag=thenewyorktim-20"
            },
            {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780593374191?at=10lIEQ"
            },
            {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593374191"
            },
            {
              "name": "Books-A-Million",
              "url": "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFIVE%2BSURVIVE%2FHolly%2BJackson%2F9780593374191"
            },
            {
              "name": "Bookshop",
              "url": "https://bookshop.org/a/3546/9780593374191"
            },
            {
              "name": "IndieBound",
              "url": "https://www.indiebound.org/book/9780593374191?aff=NYT"
            }
          ],
          "__v": 0
        }
      ]
    }
  ]

// Function to display books
function displayTopBooks(apiResponse) {
    bookContainer.innerHTML = '';

    apiResponse.forEach(category => {
        category.books.forEach(book => {
            let bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            let bookImage = document.createElement('img');
            bookImage.src = book.book_image;
            bookImage.alt = `${book.title} cover`;

            let bookInfo = document.createElement('div');

            let bookTitle = document.createElement('h2');
            bookTitle.textContent = book.title;

            let bookAuthor = document.createElement('p');
            bookAuthor.textContent = `Author: ${book.author}`;

            let bookDescription = document.createElement('p');
            bookDescription.textContent = `Description: ${book.description || 'No description available.'}`;

            let buyLinks = document.createElement('div');
            buyLinks.classList.add('buy-links');
            book.buy_links.forEach(link => {
                let buyLink = document.createElement('a');
                buyLink.href = link.url;
                buyLink.target = "_blank";
                buyLink.textContent = link.name;
                buyLinks.appendChild(buyLink);
            });

            bookInfo.appendChild(bookTitle);
            bookInfo.appendChild(bookAuthor);
            bookInfo.appendChild(bookDescription);
            bookInfo.appendChild(buyLinks);

            bookCard.appendChild(bookImage);
            bookCard.appendChild(bookInfo);

            bookContainer.appendChild(bookCard);
        });
    });
}

// Call the function to display books
displayTopBooks(apiResponse);
