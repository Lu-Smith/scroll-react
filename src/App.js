
import { ScrollContainer, ScrollPage, Animator, Sticky, ZoomIn, FadeIn, StickyIn, batch, Fade, MoveIn, MoveOut, Move } from 'react-scroll-motion';
import './App.css';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp =batch(Fade(), Sticky(), Move());

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
        <h2>Today is a great day ☀️</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
        <h2>Tommorow will be great 😍</h2>
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
      <Animator animation={batch(Fade(), Sticky())}>
        <h2>The End</h2>
      </Animator>
      </ScrollPage>
      
    </ScrollContainer>
  );
}

export default App;
