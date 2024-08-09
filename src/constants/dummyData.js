import images from "./images";
import { COLORS } from "./theme";
const featuresData = [
  {
    id: 1,
    image: images.ChatGptIcon,
    title: "ChatGPT",
    background: COLORS.chatGptColor,
    description:
      "ChatGPT is an advanced AI language model developed by OpenAI that can generate human-like text based on the prompts it receives.",
  },
  {
    id: 2,
    image: images.DallEIcon,
    title: "DALL·E",
    background: COLORS.dalleCOlor,
    description:
      "DALL·E is a generative AI model by OpenAI that creates images from textual descriptions. It can generate highly detailed and creative visuals from simple prompts.",
  },
  {
    id: 3,
    image: images.MidjourneyIcon,
    title: "MidJourney",
    background: COLORS.midjourneyColor,
    description:
      "MidJourney is an AI art generator that creates detailed and imaginative art based on textual input. It's known for its unique and artistic styles.",
  },
  {
    id: 4,
    image: images.StableDiffusionIcon,
    title: "Stable Diffusion",
    background: COLORS.stableDiffusionColor,
    description:
      "Stable Diffusion is a text-to-image diffusion model that generates high-quality images from text prompts. It's popular for its versatility and speed in generating visuals.",
  },
  {
    id: 5,
    image: images.GeminiIcon,
    title: "Gemini",
    background: COLORS.geminiColor,
    description:
      "Gemini is a generative AI model developed by Google DeepMind designed for advanced conversational abilities and diverse applications, offering context-aware interactions.",
  },
  {
    id: 6,
    image: images.CopilotIcon,
    title: "Copilot",
    background: COLORS.copilotColor,
    description:
      "Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It helps developers by suggesting code snippets and completing code based on context.",
  },
];

// dummy messages

const dummyMessages = [
  {
    role: "user",
    content: "Hi there! How are you",
  },
  {
    role: "assistant",
    content: "I'm fine! How may i help you today?",
  },
  {
    role: "user",
    content: "Create me an image of a cat",
  },
  {
    role: "assistant",
    content: "https://img.freepik.com/free-photo/cute-kitten-sitting-staring-flower-nature-beauty-generated-by-artificial-intelligence_25030-66726.jpg?t=st=1723219525~exp=1723223125~hmac=714e6dc1a0cc955c65664b1545e4cc629e28d302a6628fe39acebc1e88337185&w=1380",
  },
];

export default { featuresData, dummyMessages };
