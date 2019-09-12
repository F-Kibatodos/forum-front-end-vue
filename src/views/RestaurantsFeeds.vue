<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";

const dummyData = {
  restaurants: [
    {
      id: 48,
      name: "Lucie McDermott",
      tel: "(087) 019-9323 x4728",
      address: "218 Bennett Street",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 46,
      name: "Jasper Mueller",
      tel: "254-159-2190",
      address: "44890 Dominique Wall",
      opening_hours: "08:00",
      description: "dolorem ratione et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154",
      viewCounts: 23,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-09-09T15:32:20.621Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 49,
      name: "Russ Kertzmann",
      tel: "087-274-1881",
      address: "6601 Lura Lodge",
      opening_hours: "08:00",
      description: "sed",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 50,
      name: "Mrs. Wellington Lehner",
      tel: "792-886-2864 x53152",
      address: "4185 Cartwright Green",
      opening_hours: "08:00",
      description: "aspernatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 47,
      name: "Beverly Yundt",
      tel: "099-398-9865 x7776",
      address: "27001 Ike Well",
      opening_hours: "08:00",
      description:
        "Quibusdam ut natus officia porro. Quis eum explicabo architecto sint repudiandae unde. Sunt magni quibusdam ipsa et impedit esse occaecati. Et nemo quaerat saepe delectus. Autem dignissimos corporis sed voluptates suscipit quia fuga. Dolorum ea suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.588878866397906",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.443Z",
      updatedAt: "2019-07-30T16:24:55.443Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 42,
      name: "Melody Koepp",
      tel: "(774) 342-2533",
      address: "3318 Feeney Hollow",
      opening_hours: "08:00",
      description: "beatae iste alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-09-09T15:36:44.625Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 45,
      name: "Luther Hickle",
      tel: "477-667-6528 x320",
      address: "79381 Bradtke Manor",
      opening_hours: "08:00",
      description:
        "Esse qui rerum et occaecati quia quo molestiae. Consequuntur rem iste doloribus minus esse ea voluptas atque. Dolore distinctio tempore expedita atque unde aliquam laudantium.\n \rQuaerat est ut. Nulla dolore a error eaque voluptatem quo. Laborum quis reiciendis in ipsa dolores dolor exercitationem itaque deserunt. Rerum ut ab sequi consequatur quae nulla. Consequatur nam aut voluptate amet qui omnis. Voluptatem commodi assumenda quisquam consequatur magni quod repellat ut dolore.\n \rRem nesciunt quia adipisci debitis distinctio est. Odit voluptas autem repellendus commodi a quas voluptatum. At quia modi ut ea earum consequatur facere recusandae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.10379900896436",
      viewCounts: 1,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-09-09T14:20:54.212Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 44,
      name: "Sonny Funk",
      tel: "093-689-0372",
      address: "908 Kassulke Landing",
      opening_hours: "08:00",
      description:
        "Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 43,
      name: "Carrie Robel V",
      tel: "455.357.0399 x356",
      address: "33531 Mayert Fall",
      opening_hours: "08:00",
      description:
        "Quos illum dolorem laboriosam temporibus incidunt non nihil.\nPerspiciatis iusto cumque possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.74175407974987",
      viewCounts: null,
      createdAt: "2019-07-30T16:24:55.442Z",
      updatedAt: "2019-07-30T16:24:55.442Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    },
    {
      id: 40,
      name: "Robyn Schroeder",
      tel: "406.132.4400",
      address: "647 Yundt Mountains",
      opening_hours: "08:00",
      description: "Incidunt rerum perspiciatis ut iste ipsum labore.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363",
      viewCounts: 11,
      createdAt: "2019-07-30T16:24:55.441Z",
      updatedAt: "2019-09-09T14:58:25.141Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2019-07-30T16:24:55.429Z",
        updatedAt: "2019-07-30T16:24:55.429Z"
      }
    }
  ],
  comments: [
    {
      id: 123,
      text: "Ad cum unde saepe est sint.",
      UserId: 3,
      RestaurantId: 23,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
        isAdmin: false,
        image: "https://i.imgur.com/OezkRwO.jpg",
        createdAt: "2019-07-30T16:24:55.422Z",
        updatedAt: "2019-08-07T06:16:40.100Z"
      },
      Restaurant: {
        id: 23,
        name: "Obie Veum",
        tel: "852.152.3521 x47973",
        address: "543 Waters Bypass",
        opening_hours: "08:00",
        description:
          "Ea voluptate fugiat id est voluptatem sit. Aut debitis qui impedit distinctio. Porro doloremque voluptas esse non temporibus ipsum. Illo dolore vel voluptatum vero qui ullam sed rerum eius.\n \rNecessitatibus debitis maiores veniam et neque mollitia dignissimos assumenda quisquam. In ipsa quo quod quo et nesciunt dolore id. Qui culpa labore. Qui velit praesentium vitae et et perspiciatis et.\n \rLaborum odit eum neque rerum. Dolorem consectetur placeat corporis. Amet delectus minima ipsa veniam. Non qui maxime porro exercitationem hic.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146",
        viewCounts: null,
        createdAt: "2019-07-30T16:24:55.437Z",
        updatedAt: "2019-07-30T16:24:55.437Z",
        CategoryId: 1
      }
    },
    {
      id: 126,
      text: "Maxime voluptatum sit iure.",
      UserId: 3,
      RestaurantId: 26,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
        isAdmin: false,
        image: "https://i.imgur.com/OezkRwO.jpg",
        createdAt: "2019-07-30T16:24:55.422Z",
        updatedAt: "2019-08-07T06:16:40.100Z"
      },
      Restaurant: {
        id: 26,
        name: "Zoe Connelly",
        tel: "724-565-0111",
        address: "8718 Nolan Roads",
        opening_hours: "08:00",
        description:
          "Ipsum aspernatur quis est voluptates maiores quam autem est. Nesciunt quibusdam velit. Qui iste quibusdam molestiae et molestias et. Officia ipsam facere. Voluptatum cum itaque qui necessitatibus amet et itaque. Sed consequuntur at omnis quos cupiditate accusantium tempore fugiat ut.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864",
        viewCounts: 27,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-26T10:07:25.048Z",
        CategoryId: 1
      }
    },
    {
      id: 118,
      text: "Voluptatum libero dignissimos unde nulla minus.",
      UserId: 1,
      RestaurantId: 18,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 1,
        name: "root test",
        email: "root@example.com",
        password:
          "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
        isAdmin: true,
        image: "https://i.imgur.com/58ImzMM.png",
        createdAt: "2019-07-30T16:24:54.983Z",
        updatedAt: "2019-08-07T04:09:56.622Z"
      },
      Restaurant: {
        id: 18,
        name: "Esther Herzog",
        tel: "497-524-7986",
        address: "218 Cummings Station",
        opening_hours: "08:00",
        description:
          "Quis amet sint et libero unde.\nInventore et incidunt nobis iste commodi quidem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=99.71540496895199",
        viewCounts: null,
        createdAt: "2019-07-30T16:24:55.436Z",
        updatedAt: "2019-07-30T16:24:55.436Z",
        CategoryId: 4
      }
    },
    {
      id: 122,
      text: "Sint quia consequuntur illo et nemo.",
      UserId: 3,
      RestaurantId: 22,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
        isAdmin: false,
        image: "https://i.imgur.com/OezkRwO.jpg",
        createdAt: "2019-07-30T16:24:55.422Z",
        updatedAt: "2019-08-07T06:16:40.100Z"
      },
      Restaurant: {
        id: 22,
        name: "Mr. Lavonne Grimes",
        tel: "841.933.1636",
        address: "298 Albin Road",
        opening_hours: "08:00",
        description: "Quia eum eum sapiente sint distinctio eveniet.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=64.93265026937894",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.437Z",
        updatedAt: "2019-09-09T14:18:52.056Z",
        CategoryId: 2
      }
    },
    {
      id: 124,
      text: "Accusantium repudiandae est hic nihil voluptatem.",
      UserId: 3,
      RestaurantId: 24,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
        isAdmin: false,
        image: "https://i.imgur.com/OezkRwO.jpg",
        createdAt: "2019-07-30T16:24:55.422Z",
        updatedAt: "2019-08-07T06:16:40.100Z"
      },
      Restaurant: {
        id: 24,
        name: "Al Von",
        tel: "038-326-5052",
        address: "5559 VonRueden Courts",
        opening_hours: "08:00",
        description:
          "Aliquid numquam hic. Minima perferendis quia cum tempora amet voluptatem nulla. Accusantium dolorum sequi tempore qui dolore voluptatem illo animi autem. Ut asperiores eum atque impedit. Sint vero maiores ratione minus itaque dolor repellat minus alias.\n \rDoloribus adipisci atque consequatur error aut non magnam nemo. Aliquam ex omnis tempora sint dolorem. Voluptatem omnis magnam occaecati quibusdam nemo et odio molestias. Amet voluptatibus qui et necessitatibus blanditiis sequi quidem ut repellat. Consequatur ratione id libero optio. Dolor ut velit est.\n \rItaque velit aut consequatur dolorem similique quae laudantium. Tempore fugiat quod ratione quis autem quia. Nesciunt voluptatem nobis modi. Molestiae error et nesciunt a ea.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334",
        viewCounts: 33,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T11:50:44.476Z",
        CategoryId: 1
      }
    },
    {
      id: 125,
      text: "Laudantium minima aliquam.",
      UserId: 2,
      RestaurantId: 25,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
        isAdmin: false,
        image: "https://i.imgur.com/Q14p2le.jpg",
        createdAt: "2019-07-30T16:24:55.204Z",
        updatedAt: "2019-09-09T05:34:35.986Z"
      },
      Restaurant: {
        id: 25,
        name: "Austen Runte Jr.",
        tel: "(111) 281-9830 x0839",
        address: "76697 Greenfelder Isle",
        opening_hours: "08:00",
        description:
          "Incidunt voluptas quo. Et tempora facere totam odio. Dolor aliquam vitae ipsum minus velit aut animi.\n \rQuam enim deserunt ratione. Qui cupiditate qui eos dolores repellat velit. Et ea explicabo sed dolores dolorum magni voluptatem. Omnis exercitationem omnis. Dolores praesentium itaque eos. Omnis dignissimos dolorum quia.\n \rVel enim maiores quidem ut quia. Ipsum voluptatem dolorem a sit eum. Libero soluta reprehenderit impedit. Non quae tenetur eum sapiente ab ipsum sequi.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=47.68607895620682",
        viewCounts: 3,
        createdAt: "2019-07-30T16:24:55.438Z",
        updatedAt: "2019-08-27T10:12:55.028Z",
        CategoryId: 3
      }
    },
    {
      id: 116,
      text: "Fugit dignissimos quasi vero magni corporis necessitatibus.",
      UserId: 3,
      RestaurantId: 16,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
        isAdmin: false,
        image: "https://i.imgur.com/OezkRwO.jpg",
        createdAt: "2019-07-30T16:24:55.422Z",
        updatedAt: "2019-08-07T06:16:40.100Z"
      },
      Restaurant: {
        id: 16,
        name: "Joaquin Walsh",
        tel: "(359) 745-0699 x3250",
        address: "8271 McKenzie Ridges",
        opening_hours: "08:00",
        description: "Molestiae sed ut dolores neque optio et expedita.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=16.407932234411838",
        viewCounts: null,
        createdAt: "2019-07-30T16:24:55.435Z",
        updatedAt: "2019-07-30T16:24:55.435Z",
        CategoryId: 2
      }
    },
    {
      id: 117,
      text: "Illum velit sit voluptatibus impedit odit.",
      UserId: 2,
      RestaurantId: 17,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
        isAdmin: false,
        image: "https://i.imgur.com/Q14p2le.jpg",
        createdAt: "2019-07-30T16:24:55.204Z",
        updatedAt: "2019-09-09T05:34:35.986Z"
      },
      Restaurant: {
        id: 17,
        name: "Alexandro Bahringer",
        tel: "293-115-4784",
        address: "75754 Ashlynn Field",
        opening_hours: "08:00",
        description:
          "Et dolores non harum. Non autem dolorem deserunt. Est sit ut aut assumenda vel voluptas. Eligendi cumque unde autem sed velit eligendi. Est occaecati asperiores corrupti. Quidem perferendis id fuga.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=46.018008252855424",
        viewCounts: null,
        createdAt: "2019-07-30T16:24:55.436Z",
        updatedAt: "2019-07-30T16:24:55.436Z",
        CategoryId: 1
      }
    },
    {
      id: 119,
      text: "Est modi non eum voluptatibus et iure facere id.",
      UserId: 1,
      RestaurantId: 19,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 1,
        name: "root test",
        email: "root@example.com",
        password:
          "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
        isAdmin: true,
        image: "https://i.imgur.com/58ImzMM.png",
        createdAt: "2019-07-30T16:24:54.983Z",
        updatedAt: "2019-08-07T04:09:56.622Z"
      },
      Restaurant: {
        id: 19,
        name: "Dustin Lynch",
        tel: "1-382-742-2344 x941",
        address: "102 Johnson Camp",
        opening_hours: "08:00",
        description:
          "Veritatis quae ad id amet. Similique est suscipit. Rerum blanditiis voluptatem voluptatem a architecto voluptatem nesciunt blanditiis. Iste deleniti ut eos quia quia qui id ut molestias. Veritatis voluptas quibusdam.\n \rEt temporibus aut. Laboriosam ab et. Amet provident reprehenderit et quam. Impedit recusandae aut itaque voluptatem et rerum tempore.\n \rEt voluptate ullam reiciendis sit nostrum eveniet. Aut aut quidem aut commodi nulla ea. Qui quae soluta omnis explicabo ut aliquid. Aut soluta sapiente nihil fuga repudiandae. Quia aliquid consectetur sequi porro quam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=19.604747512748677",
        viewCounts: 2,
        createdAt: "2019-07-30T16:24:55.436Z",
        updatedAt: "2019-09-07T16:22:46.020Z",
        CategoryId: 5
      }
    },
    {
      id: 127,
      text: "Odio assumenda commodi illum.",
      UserId: 1,
      RestaurantId: 27,
      createdAt: "2019-07-30T16:24:55.454Z",
      updatedAt: "2019-07-30T16:24:55.454Z",
      User: {
        id: 1,
        name: "root test",
        email: "root@example.com",
        password:
          "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
        isAdmin: true,
        image: "https://i.imgur.com/58ImzMM.png",
        createdAt: "2019-07-30T16:24:54.983Z",
        updatedAt: "2019-08-07T04:09:56.622Z"
      },
      Restaurant: {
        id: 27,
        name: "Penelope Mayert DDS",
        tel: "1-775-369-6229",
        address: "52148 Susan Pike",
        opening_hours: "08:00",
        description: "non nobis quo",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767",
        viewCounts: 9,
        createdAt: "2019-07-30T16:24:55.439Z",
        updatedAt: "2019-08-27T03:39:59.742Z",
        CategoryId: 1
      }
    }
  ]
};

export default {
  components: {
    NavTabs,
    NewestRestaurants
  },
  data() {
    return {
      restaurants: [],
      comments: []
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments;
    }
  }
};
</script>