import { useRecoilState } from "recoil";
import { exampleState, listNameState, nameState } from "../../state/allState";
import Link from "next/link";
import { useRef } from "react";

export default function CharacterCounter() {
  const [name, setName] = useRecoilState(nameState);
  const [list, setList] = useRecoilState(listNameState);
  const [example, setExample] = useRecoilState(exampleState);
  const inputAppendRef = useRef();
  const input1 = useRef();

  const onChange = (event, id) => {
    // State is mmutable
    let newList = [...list].map((item) => {
      if (item.id === id) return { ...item, value: event.target.value };
      else return item;
    });

    setList(newList);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        ref={input1}
        onChange={() => {
          setName(input1.current.value);
        }}
      />
      <br />
      Echo: {name}
      <div>
        <Link href={"/test/recoil/display"}>display it</Link>
      </div>
      <br />
      {list.map((item) => {
        return (
          <div key={item.id}>
            <input
              className="form-control"
              itemType="number"
              value={item.value}
              onChange={(e) => onChange(e, item.id)}
            ></input>
            Echo: {item.value}
          </div>
        );
      })}
      <input type="text" ref={inputAppendRef} />
      <button
        onClick={(e) => {
          let newVal = [...example];
          newVal.push({ exampleKey: inputAppendRef.current.value });
          setExample(newVal);
        }}
      >
        Append to example State
      </button>
      echo : {JSON.stringify(example)}
    </div>
  );
}
