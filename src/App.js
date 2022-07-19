
import { ScrollContainer, ScrollPage, Animator, Sticky, ZoomIn, FadeIn, StickyIn, batch, FadeOut, Fade, MoveIn, MoveOut, Move } from 'react-scroll-motion';
import './App.css';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp =batch(Fade(), Sticky(), MoveOut(0, -500));

const LineOne = batch(MoveIn(500, 200), MoveOut(500, 1000), FadeOut(1, 0));
const LineTwo = batch(MoveIn(400, 500), MoveOut(600, 1200), FadeOut(1, 0));
const LineThree = batch(MoveIn(300, 700), MoveOut(800, 1400), FadeOut(1, 0));

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
        <h2>Scroll animation 😊</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
        <h2 className="italic">Today is a great day ☀️</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
        <h2 className="italic">Tommorow will be great 😍</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="section-3">
        <h2><Animator animation={MoveIn(-1000, 0)}>Hello 🐢🐈🐳 </Animator></h2>
        <h2><Animator animation={MoveIn(1000, 0)}>Hello You 👋 </Animator></h2>
        <h2><Animator animation={MoveOut(1000, 0)}>Hello World 🌍 </Animator></h2>
        <h2><Animator animation={MoveOut(-1000,0)}>You are the Star ⭐ </Animator></h2>

        </div>
      </ScrollPage>
      <ScrollPage page={4}>
      <Animator  animation={LineOne}>
        <h2 className="still-here">😄 Still Here 😄</h2>
      </Animator>
      <Animator  animation={LineTwo}>
        <h2 className="still-here">😄 Still Here 😄</h2>
      </Animator>
      <Animator  animation={LineThree}>
        <h2 className="still-here">😄 Still Here 😄</h2>
      </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
      <Animator  animation={batch(Fade(), Sticky(), MoveIn(0, 400))}>
        <h2 className="end">GoodBye</h2>
      </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
      <Animator animation={batch(Fade(), Sticky())}>
        <h2 className="end">The End</h2>
      </Animator>
      </ScrollPage>
      
    </ScrollContainer>
  );
}

export default App;
