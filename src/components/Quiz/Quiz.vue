<template>
  <div
    class="
      h-screen
      flex flex-col
      justify-between
      items-center
      space-y-9
      mt-[15vh]
      pb-10
    "
  >
    <MyTextInputVue @customChange="handleCustomChange" />
    <p>Uppercase: {{ uppercase }}</p>
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
import MyTextInputVue from "../Emit/MyTextInput.vue";
import { ref } from "vue";

// reactive state
let index = ref(0);
let selected_id = ref(null);

let uppercase = ref(null);
const handleCustomChange = (s) => {
  uppercase.value = s;
};
// functions that mutate state and trigger updates
const increment = () => {
  if (selected_id.value != null) {
    index.value++;
    selected_id.value = null;
  }
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
        id: 1,
        name: "Euphoria",
      },
      {
        id: 2,
        name: "Angel Baby",
      },
      {
        id: 3,
        name: "Beside You",
      },
      {
        id: 4,
        name: "Ipad",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: 0,
  },
  {
    id: 1,
    Title: "Just a couple more questions!",
    Question: "Who's Listening?",
    Answer: [
      {
        id: 1,
        name: "Funny",
      },
      {
        id: 2,
        name: "Less of you",
      },
      {
        id: 3,
        name: "2 soon",
      },
      {
        id: 4,
        name: "My You",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 2,
    Title: "General Knowledge Quiz",
    Question: "What was Meta Platforms Inc formerly known as?",
    Answer: [
      {
        id: 1,
        name: "Facebook",
      },
      {
        id: 2,
        name: "Instagram",
      },
      {
        id: 3,
        name: "Line",
      },
      {
        id: 4,
        name: "Telegram",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
  {
    id: 3,
    Title: "General Knowledge Quiz",
    Question: "What does CIA stand for?",
    Answer: [
      {
        id: 1,
        name: "Center Intelligence Agency",
      },
      {
        id: 2,
        name: "Civil Intelligence Agancy",
      },
      {
        id: 3,
        name: "Central Intelligence Agency",
      },
      {
        id: 4,
        name: "Cute Information Agency",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 4,
    Title: "General Knowledge Quiz",
    Question: "What is a young giraffe called?",
    Answer: [
      {
        id: 1,
        name: "Baby giraffe",
      },
      {
        id: 2,
        name: "A calf",
      },
      {
        id: 3,
        name: "Small giraffe",
      },
      {
        id: 4,
        name: "Baby Long neck",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: 0,
  },
  {
    id: 5,
    Title: "General Knowledge Quiz",
    Question: "Pyrophobia is the fear of what?",
    Answer: [
      {
        id: 1,
        name: "Height",
      },
      {
        id: 2,
        name: "Anime",
      },
      {
        id: 3,
        name: "Water",
      },
      {
        id: 4,
        name: "Fire",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 6,
    Title: "General Knowledge Quiz",
    Question: "According to George Orwell, who is watching us?",
    Answer: [
      {
        id: 1,
        name: "Big Brother",
      },
      {
        id: 2,
        name: "Big Sister",
      },
      {
        id: 3,
        name: "Small Brother",
      },
      {
        id: 4,
        name: "Big Daddy",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
  {
    id: 7,
    Title: "General Knowledge Quiz",
    Question:
      "Randall Flag, Jack Torrance and John Coffey are all characters created by which author?",
    Answer: [
      {
        id: 1,
        name: "Stephen Hawking",
      },
      {
        id: 2,
        name: "Stephen King",
      },
      {
        id: 3,
        name: "Stephen Chow",
      },
      {
        id: 4,
        name: "Stephen Curry",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: 0,
  },
  {
    id: 8,
    Title: "General Knowledge Quiz",
    Question: "What band was Harry Styles in before his solo career?",
    Answer: [
      {
        id: 1,
        name: "One Direction",
      },
      {
        id: 2,
        name: "Two Direction",
      },
      {
        id: 3,
        name: "Linkin Park",
      },
      {
        id: 4,
        name: "Why don't we",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
  {
    id: 9,
    Title: "General Knowledge Quiz",
    Question: "Who is the president of the United States?",
    Answer: [
      {
        id: 1,
        name: "Donald Trump",
      },
      {
        id: 2,
        name: "Donald Duck",
      },
      {
        id: 3,
        name: "Joe Biden",
      },
      {
        id: 4,
        name: "Joe Alwyn",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 10,
    Title: "General Knowledge Quiz",
    Question:
      "Which British actor will play Batman in the upcoming reboot directed by Matt Reeves?",
    Answer: [
      {
        id: 1,
        name: "Donald Trump",
      },
      {
        id: 2,
        name: "Ben Affleck",
      },
      {
        id: 3,
        name: "Christian Bale",
      },
      {
        id: 4,
        name: "Robert Pattinson",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 11,
    Title: "General Knowledge Quiz",
    Question:
      "How many countries are there in the region of Europe? (Recognised by the United Nations)",
    Answer: [
      {
        id: 1,
        name: "90",
      },
      {
        id: 2,
        name: "40",
      },
      {
        id: 3,
        name: "30",
      },
      {
        id: 4,
        name: "45",
      },
    ],
    Correct_Answer: 2,
    Selected_Answer: 0,
  },
  {
    id: 12,
    Title: "General Knowledge Quiz",
    Question:
      "How many permanent members are there on the UN security council?",
    Answer: [
      {
        id: 1,
        name: "Six",
      },
      {
        id: 2,
        name: "Four",
      },
      {
        id: 3,
        name: "Five",
      },
      {
        id: 4,
        name: "Eight",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 13,
    Title: "General Knowledge Quiz",
    Question: "How many centimetres in a metre?",
    Answer: [
      {
        id: 1,
        name: "10",
      },
      {
        id: 2,
        name: "1000",
      },
      {
        id: 3,
        name: "-100",
      },
      {
        id: 4,
        name: "100",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 14,
    Title: "General Knowledge Quiz",
    Question: "Who are Harry Potter's two best friends?",
    Answer: [
      {
        id: 1,
        name: "Doctor Strange and Wanda",
      },
      {
        id: 2,
        name: "Tom and Jerry",
      },
      {
        id: 3,
        name: "Sasuke and Sakura",
      },
      {
        id: 4,
        name: "Ron and Hermione",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 15,
    Title: "General Knowledge Quiz",
    Question: "What’s the name of the cowboy in Toy Story?",
    Answer: [
      {
        id: 1,
        name: "Woody",
      },
      {
        id: 2,
        name: "Booty",
      },
      {
        id: 3,
        name: "Buzz",
      },
      {
        id: 4,
        name: "Shark",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
  {
    id: 16,
    Title: "General Knowledge Quiz",
    Question: "How many planets are in our solar system?",
    Answer: [
      {
        id: 1,
        name: "6",
      },
      {
        id: 2,
        name: "7",
      },
      {
        id: 3,
        name: "8",
      },
      {
        id: 4,
        name: "9",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 17,
    Title: "General Knowledge Quiz",
    Question: "How many elements are in the periodic table?",
    Answer: [
      {
        id: 1,
        name: "118",
      },
      {
        id: 2,
        name: "181",
      },
      {
        id: 3,
        name: "119",
      },
      {
        id: 4,
        name: "199",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
  {
    id: 18,
    Title: "General Knowledge Quiz",
    Question: "How many hearts does an octopus have?",
    Answer: [
      {
        id: 1,
        name: "0",
      },
      {
        id: 2,
        name: "1",
      },
      {
        id: 3,
        name: "2",
      },
      {
        id: 4,
        name: "3",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 19,
    Title: "General Knowledge Quiz",
    Question:
      "Name the actress who plays the role of Mike Wheeler in Stranger Things.",
    Answer: [
      {
        id: 1,
        name: "Fat Wolfhard",
      },
      {
        id: 2,
        name: "Finn Doghard",
      },
      {
        id: 3,
        name: "Finn Wolfeasy",
      },
      {
        id: 4,
        name: "Finn Wolfhard",
      },
    ],
    Correct_Answer: 4,
    Selected_Answer: 0,
  },
  {
    id: 20,
    Title: "General Knowledge Quiz",
    Question: "Who killed Tony Stark’s parents?",
    Answer: [
      {
        id: 1,
        name: "The Summer Soldier",
      },
      {
        id: 2,
        name: "The Rainy Soldier",
      },
      {
        id: 3,
        name: "The Winter Soldier",
      },
      {
        id: 4,
        name: "Captain America",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 21,
    Title: "General Knowledge Quiz",
    Question: "What is the collective name for a group of crows?",
    Answer: [
      {
        id: 1,
        name: "A killer",
      },
      {
        id: 2,
        name: "A Horde",
      },
      {
        id: 3,
        name: "A murder",
      },
      {
        id: 4,
        name: "A corw group",
      },
    ],
    Correct_Answer: 3,
    Selected_Answer: 0,
  },
  {
    id: 22,
    Title: "General Knowledge Quiz",
    Question: "How many sides does an octagon have?",
    Answer: [
      {
        id: 1,
        name: "8",
      },
      {
        id: 2,
        name: "9",
      },
      {
        id: 3,
        name: "10",
      },
      {
        id: 4,
        name: "11",
      },
    ],
    Correct_Answer: 1,
    Selected_Answer: 0,
  },
]);
</script>
