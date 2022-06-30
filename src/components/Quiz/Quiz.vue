<template>
  <div
    class="
      h-screen
      flex flex-col
      justify-between
      items-center
      space-y-9
      mt-[23vh]
      pb-10
    "
  >
    <div>
      <div class="text-[#fff] text-lg leading-snug text-center">
        {{ items[index].Title }}
      </div>
      <div
        class="text-[#fff] text-3xl font-semibold leading-snug text-center mt-5"
      >
        {{ items[index].Question }}
      </div>
      <div class="flex justify-center mt-16">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Button
            v-for="Ans in items[index].Answer"
            :key="Ans.id"
            :name="Ans.name"
            :id="Ans.id"
            :selected_ans="items[index].Selected_Answer"
            :correct_ans="items[index].Correct_Answer"
            @click="Selected_Handler(Ans.id, index)"
          />
        </div>
      </div>
    </div>

    <!-- Next Question -->
    <div @click="increment" class="relative flex items-center justify-center">
      <div
        class="
          absolute
          bg-gradient-to-r
          from-darkgray
          to-gray
          animate-pulse
          w-28
          h-28
          rounded-full
        "
      ></div>
      <div
        class="
          absolute
          bg-gradient-to-r
          from-darkgray
          to-darkgray
          w-16
          h-16
          flex
          items-center
          justify-center
          rounded-full
          hover:scale-105
          ease-in
          duration-100
          transition
          cursor-pointer
        "
      >
        <img
          class="
            w-9
            h-9
            bg-yellow
            shadow-lg
            rounded-full
            pt-[8px]
            pb-[8px]
            px-2
          "
          src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-1.png"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "../Button/Button.vue";
import { ref } from "vue";

// reactive state
let index = ref(0);
let selected_id = ref(null);

// functions that mutate state and trigger updates
const increment = () => {
  index.value++;
  selected_id.value = null;
};
const Selected_Handler = (id, index) => {
  if (items.value[index].Selected_Answer == "") {
    selected_id.value = id;
    items.value[index].Selected_Answer = id;
  }
};

let items = ref([
  {
    id: 0,
    Title: "And go!",
    Question: "Who's Listening?",
    Answer: [
      {
        id: 0,
        name: "Euphoria",
      },
      {
        id: 1,
        name: "Angel Baby",
      },
      {
        id: 2,
        name: "Beside You",
      },
      {
        id: 3,
        name: "Ipad",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: "",
  },
  {
    id: 1,
    Title: "Just a couple more questions!",
    Question: "Who's Listening?",
    Answer: [
      {
        id: 0,
        name: "Funny",
      },
      {
        id: 1,
        name: "Less of you",
      },
      {
        id: 2,
        name: "2 soon",
      },
      {
        id: 3,
        name: "My You",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 2,
    Title: "General Knowledge Quiz",
    Question: "What was Meta Platforms Inc formerly known as?",
    Answer: [
      {
        id: 0,
        name: "Facebook",
      },
      {
        id: 1,
        name: "Instagram",
      },
      {
        id: 2,
        name: "Line",
      },
      {
        id: 3,
        name: "Telegram",
      },
    ],
    Correct_Answer: 0,
    Selected_Answer: "",
  },
  {
    id: 3,
    Title: "General Knowledge Quiz",
    Question: "What does CIA stand for?",
    Answer: [
      {
        id: 0,
        name: "Center Intelligence Agency",
      },
      {
        id: 1,
        name: "Civil Intelligence Agancy",
      },
      {
        id: 2,
        name: "Central Intelligence Agency",
      },
      {
        id: 3,
        name: "Cute Information Agency",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 4,
    Title: "General Knowledge Quiz",
    Question: "What is a young giraffe called?",
    Answer: [
      {
        id: 0,
        name: "Baby giraffe",
      },
      {
        id: 1,
        name: "A calf",
      },
      {
        id: 2,
        name: "Small giraffe",
      },
      {
        id: 3,
        name: "Baby Long neck",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: "",
  },
  {
    id: 5,
    Title: "General Knowledge Quiz",
    Question: "Pyrophobia is the fear of what?",
    Answer: [
      {
        id: 0,
        name: "Height",
      },
      {
        id: 1,
        name: "Anime",
      },
      {
        id: 2,
        name: "Water",
      },
      {
        id: 3,
        name: "Fire",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 6,
    Title: "General Knowledge Quiz",
    Question: "According to George Orwell, who is watching us?",
    Answer: [
      {
        id: 0,
        name: "Big Brother",
      },
      {
        id: 1,
        name: "Big Sister",
      },
      {
        id: 2,
        name: "Small Brother",
      },
      {
        id: 3,
        name: "Big Daddy",
      },
    ],
    Correct_Answer: 0,
    Selected_Answer: "",
  },
  {
    id: 7,
    Title: "General Knowledge Quiz",
    Question:
      "Randall Flag, Jack Torrance and John Coffey are all characters created by which author?",
    Answer: [
      {
        id: 0,
        name: "Stephen Hawking",
      },
      {
        id: 1,
        name: "Stephen King",
      },
      {
        id: 2,
        name: "Stephen Chow",
      },
      {
        id: 3,
        name: "Stephen Curry",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: "",
  },
  {
    id: 8,
    Title: "General Knowledge Quiz",
    Question: "What band was Harry Styles in before his solo career?",
    Answer: [
      {
        id: 0,
        name: "One Direction",
      },
      {
        id: 1,
        name: "Two Direction",
      },
      {
        id: 2,
        name: "Linkin Park",
      },
      {
        id: 3,
        name: "Why don't we",
      },
    ],
    Correct_Answer: 0,
    Selected_Answer: "",
  },
  {
    id: 9,
    Title: "General Knowledge Quiz",
    Question: "Who is the president of the United States?",
    Answer: [
      {
        id: 0,
        name: "Donald Trump",
      },
      {
        id: 1,
        name: "Donald Duck",
      },
      {
        id: 2,
        name: "Joe Biden",
      },
      {
        id: 3,
        name: "Joe Alwyn",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 10,
    Title: "General Knowledge Quiz",
    Question:
      "Which British actor will play Batman in the upcoming reboot directed by Matt Reeves?",
    Answer: [
      {
        id: 0,
        name: "Donald Trump",
      },
      {
        id: 1,
        name: "Ben Affleck",
      },
      {
        id: 2,
        name: "Christian Bale",
      },
      {
        id: 3,
        name: "Robert Pattinson",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 11,
    Title: "General Knowledge Quiz",
    Question:
      "How many countries are there in the region of Europe? (Recognised by the United Nations)",
    Answer: [
      {
        id: 0,
        name: "90",
      },
      {
        id: 1,
        name: "40",
      },
      {
        id: 2,
        name: "30",
      },
      {
        id: 3,
        name: "45",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: "",
  },
  {
    id: 12,
    Title: "General Knowledge Quiz",
    Question:
      "How many permanent members are there on the UN security council?",
    Answer: [
      {
        id: 0,
        name: "Six",
      },
      {
        id: 1,
        name: "Four",
      },
      {
        id: 2,
        name: "Five",
      },
      {
        id: 3,
        name: "Eight",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 13,
    Title: "General Knowledge Quiz",
    Question: "How many centimetres in a metre?",
    Answer: [
      {
        id: 0,
        name: "10",
      },
      {
        id: 1,
        name: "1000",
      },
      {
        id: 2,
        name: "-100",
      },
      {
        id: 3,
        name: "100",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 14,
    Title: "General Knowledge Quiz",
    Question: "Who are Harry Potter's two best friends?",
    Answer: [
      {
        id: 0,
        name: "Doctor Strange and Wanda",
      },
      {
        id: 1,
        name: "Tom and Jerry",
      },
      {
        id: 2,
        name: "Sasuke and Sakura",
      },
      {
        id: 3,
        name: "Ron and Hermione",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 15,
    Title: "General Knowledge Quiz",
    Question: "What’s the name of the cowboy in Toy Story?",
    Answer: [
      {
        id: 0,
        name: "Woody",
      },
      {
        id: 1,
        name: "Booty",
      },
      {
        id: 2,
        name: "Buzz",
      },
      {
        id: 3,
        name: "Shark",
      },
    ],
    Correct_Answer: 0,
    Selected_Answer: "",
  },
  {
    id: 16,
    Title: "General Knowledge Quiz",
    Question: "How many planets are in our solar system?",
    Answer: [
      {
        id: 0,
        name: "6",
      },
      {
        id: 1,
        name: "7",
      },
      {
        id: 2,
        name: "8",
      },
      {
        id: 3,
        name: "9",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 17,
    Title: "General Knowledge Quiz",
    Question: "How many elements are in the periodic table?",
    Answer: [
      {
        id: 0,
        name: "118",
      },
      {
        id: 1,
        name: "181",
      },
      {
        id: 2,
        name: "119",
      },
      {
        id: 3,
        name: "199",
      },
    ],
    Correct_Answer: 0,
    Selected_Answer: "",
  },
  {
    id: 18,
    Title: "General Knowledge Quiz",
    Question: "How many hearts does an octopus have?",
    Answer: [
      {
        id: 0,
        name: "0",
      },
      {
        id: 1,
        name: "1",
      },
      {
        id: 2,
        name: "2",
      },
      {
        id: 3,
        name: "3",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 19,
    Title: "General Knowledge Quiz",
    Question:
      "Name the actress who plays the role of Mike Wheeler in Stranger Things.",
    Answer: [
      {
        id: 0,
        name: "Fat Wolfhard",
      },
      {
        id: 1,
        name: "Finn Doghard",
      },
      {
        id: 2,
        name: "Finn Wolfeasy",
      },
      {
        id: 3,
        name: "Finn Wolfhard",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: "",
  },
  {
    id: 20,
    Title: "General Knowledge Quiz",
    Question: "Who killed Tony Stark’s parents?",
    Answer: [
      {
        id: 0,
        name: "The Summer Soldier",
      },
      {
        id: 1,
        name: "The Rainy Soldier",
      },
      {
        id: 2,
        name: "The Winter Soldier",
      },
      {
        id: 3,
        name: "Captain America",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 21,
    Title: "General Knowledge Quiz",
    Question: "What is the collective name for a group of crows?",
    Answer: [
      {
        id: 0,
        name: "A killer",
      },
      {
        id: 1,
        name: "A Horde",
      },
      {
        id: 2,
        name: "A murder",
      },
      {
        id: 3,
        name: "A corw group",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: "",
  },
  {
    id: 22,
    Title: "General Knowledge Quiz",
    Question: "How many sides does an octagon have?",
    Answer: [
      {
        id: 0,
        name: "8",
      },
      {
        id: 1,
        name: "9",
      },
      {
        id: 2,
        name: "10",
      },
      {
        id: 3,
        name: "11",
      },
    ],
    Correct_Answer: 8,
    Selected_Answer: "",
  },
]);
</script>