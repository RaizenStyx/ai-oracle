// lib/mocks.ts

// --- Daily Intention Generator Mocks ---
export const dailyIntentionPrompts = [
  "Craft a ritual for peace and calm.",
  "Write an intention for a productive work day.",
  "Generate a blessing for gratitude and abundance.",
  "Create a simple morning ritual for clarity.",
  "Formulate a nightly ritual to release stress."
];

export const dailyIntentionResponses: Record<string, string> = {
  "Craft a ritual for peace and calm.": "I will find peace in the quiet moments of my day, breathing in calm and exhaling all that no longer serves me.",
  "Write an intention for a productive work day.": "I am focused and energized. I will complete my tasks with ease and grace, and every action I take contributes to my success.",
  "Generate a blessing for gratitude and abundance.": "With a grateful heart, I welcome abundance. I acknowledge the blessings in my life and trust that more will come.",
  "Create a simple morning ritual for clarity.": "As the sun rises, so does my spirit. I am clear in my purpose and open to the guidance that will light my way.",
  "Formulate a nightly ritual to release stress.": "I release the tension of the day. With each breath, I let go of what is outside my control and embrace restful peace."
};

// --- Full Ritual Generator Mocks ---
export const fullRitualPrompts = [
  "A full moon ceremony for spiritual growth using fire and crystals.",
  "A ritual to cleanse a new living space of old energy.",
  "A spell to attract creative inspiration and new ideas.",
  "A ceremony to honor ancestors and release old family patterns.",
  "A ritual to set a powerful intention for the upcoming year."
];

export const fullRitualResponses: Record<string, string> = {
  "A full moon ceremony for spiritual growth using fire and crystals.": `
  <h2 class="ritual-title">The Ritual of the Radiant Moon</h2>
  <p class="ritual-subtitle">This ceremony is designed to harness the potent energy of the full moon to accelerate your spiritual journey. It focuses on releasing what holds you back and embracing your higher self.</p>

  <h3 class="ritual-heading">Supplies:</h3>
  <ul>
    <li>A single white or purple candle.</li>
    <li>A heat-safe bowl.</li>
    <li>Paper and a pen.</li>
    <li>A clear quartz or amethyst crystal.</li>
    <li>Optional: Sage or palo santo for cleansing.</li>
  </ul>

  <h3 class="ritual-heading">The Ceremony:</h3>
  <ol>
    <li><strong>Preparation:</strong> Find a safe outdoor space where you can see the moon. Light your candle and cleanse the area with sage, if you are using it. Hold your crystal, setting the intention for clarity and connection.</li>
    <li><strong>Release & Reflection:</strong> On the paper, write down anything you wish to release: old habits, limiting beliefs, fears. As you write, visualize this energy leaving your body and flowing onto the paper.</li>
    <li><strong>Invocation:</strong> Say these words aloud: "Full Moon, radiant and whole, I stand before you to claim my soul's growth. I release what no longer serves me, and I open my heart to the divine energy that surrounds me."</li>
    <li><strong>Transmutation:</strong> Carefully and safely, light the paper on fire and drop it into the heat-safe bowl. Watch as the smoke rises, knowing that the universe is transmuting this energy into pure potential.</li>
    <li><strong>Embracing the New:</strong> Hold your crystal up to the moonlight, letting it absorb the powerful energy. Meditate on your spiritual path, visualizing the person you are becoming. Feel the light of the moon filling you with wisdom and spiritual power.</li>
    <li><strong>Closing:</strong> Thank the moon and the elements for their guidance. Blow out the candle. Keep the crystal with you for the next few days to carry the moon's energy.</li>
  </ol>
  `,
  "A ritual to cleanse a new living space of old energy.": `
  <h2 class="ritual-title">The Ritual of Elemental Renewal</h2>
  <p class="ritual-subtitle">This simple yet powerful ritual uses the elements of fire, air, water, and earth to purify your home and invite in a new, positive frequency.</p>

  <h3 class="ritual-heading">Supplies:</h3>
  <ul>
    <li>A candle (fire).</li>
    <li>Incense or a smudging stick (air).</li>
    <li>A small bowl of water with sea salt (water and earth).</li>
  </ul>

  <h3 class="ritual-heading">The Ceremony:</h3>
  <ol>
    <li><strong>Light & Clarity:</strong> Begin in the center of your home. Light the candle, speaking your intention to clear all stagnant energy. Let the light of the flame represent the clarity and warmth you are bringing into the space.</li>
    <li><strong>Cleanse with Air:</strong> Light your incense or smudge stick. Walk to the farthest point of your home and move clockwise through each room. With a feather or your hand, fan the smoke into corners and dark spaces, saying aloud: "I release all that does not serve this space. Only love, light, and peace may enter."</li>
    <li><strong>Purify with Water & Earth:</strong> Carry the bowl of salt water with you. Dip your fingers into the water and flick a few drops into each corner, calling on the energy of water to wash away negativity and the salt to absorb it.</li>
    <li><strong>Blessing:</strong> Return to the center of your home. Hold your hands out, palms up, and visualize a white or golden light filling the space. Say: "I now seal this space with love, prosperity, and peace. It is cleansed and blessed. So it is."</li>
    <li><strong>Closing:</strong> Let the incense burn out in the center of the room. You can pour the salt water outside to return its energy to the earth.</li>
  </ol>
  `,
  "A spell to attract creative inspiration and new ideas.": `
  <h2 class="ritual-title">The Spark of Creation Spell</h2>
  <p class="ritual-subtitle">This spell is designed to unblock your creative channels and invite a flow of new ideas into your life, whether for art, writing, or any other project.</p>

  <h3 class="ritual-heading">Supplies:</h3>
  <ul>
    <li>A piece of paper and a blue or purple pen.</li>
    <li>A clear quartz crystal or a tumbled carnelian.</li>
    <li>A small bowl of water.</li>
    <li>A single white candle.</li>
    <li>Optional: A drop of essential oil like Frankincense or Lavender.</li>
  </ul>

  <h3 class="ritual-heading">The Spell:</h3>
  <ol>
    <li><strong>Preparation:</strong> Find a quiet space. Light the white candle to represent clarity. Hold your crystal, focusing on its ability to amplify energy and ideas.</li>
    <li><strong>The Seed of an Idea:</strong> On the paper, write down the phrase, "My creative mind is an open channel." Underneath, draw a simple symbol that represents creativity to you.</li>
    <li><strong>Invocation:</strong> Hold the paper in your hands and say: "By the light of this flame and the flow of this water, I open my mind and my spirit. Let inspiration find me, let ideas flow like a river, and let my creative spark ignite."</li>
    <li><strong>Activation:</strong> Dip your fingers into the water and trace the symbol you drew on the paper. As you do, visualize a a brilliant blue or purple light filling your mind, clearing any blockages and inviting in a torrent of new ideas.</li>
    <li><strong>Sealing the Spell:</strong> Place the paper under the bowl of water. Allow it to sit there for a few hours. The water will absorb the intention. After, you can pour the water over a plant to help your new ideas grow.</li>
  </ol>
  `
};