import { useRecoilState } from "recoil";
import { exampleState, listNameState, nameState } from "../../state/allState";
import Link from "next/link";
import { useRef } from "react";
import NavbarMember from "../../components/NavbarMember";

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
      <NavbarMember></NavbarMember>
      <div className="container">
        <input
          type="text"
          className="form-control"
          ref={input1}
          onChange={() => {
            setName(input1.current.value);
          }}
        />
        <br />
        Data From Recoil: {name}
        <div>
          <Link href={"/example/recoil-display"}>
            display it on another page
          </Link>
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
              Data From Recoil: {item.value}
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
    </div>
  );
}
