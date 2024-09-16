import Accordion from "./Accordion";

const App: React.FC = () => {
  return (
    <div className="content__accordion">
      <Accordion
        title="Вопрос 1"
        content={
          <div>
            <p>
              А это ответ 1: в комплексе функционируют 6 детских садов с
              площадками, воспитателями и всякими другими людьми 
            </p>
          </div>
        }
      />
      <Accordion
        title="Вопрос 2"
        content={
          <div>
            <p>
              А это ответ 1: в комплексе функционируют 6 детских садов с
              площадками, воспитателями и всякими другими людьми
            </p>
          </div>
        }
      />
    </div>
  );
};

export default App;
