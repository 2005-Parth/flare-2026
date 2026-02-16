import CustomCursor from './components/CustomCursor';
import FloatingNav from './components/FloatingNav';
import ScrollSections from './components/ScrollSections';

function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden" style={{ cursor: 'none' }}>
      <CustomCursor />
      <FloatingNav />
      <ScrollSections />
    </div>
  );
}

export default App;
