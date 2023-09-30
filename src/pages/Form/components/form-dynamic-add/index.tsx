import { useState } from "react";
import Input from "components/Form/Input";

export default function Index() {
  const [form, setForm] = useState([
    {
      social: "",
      id: Date.now(),
    },
  ]);

  const handleAddForm = () => {
    setForm([...form, { social: "", id: Date.now() }]);
  };
  const handleDelete = (id: number) => {
    const list = [...form];
    list.splice(id, 1);
    setForm(list);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
    const index = form.findIndex((item) => item.id === id);
    const list = [...form] as any; // eslint-disable-line
    list[index][name] = value;
    setForm(list);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {form.map((item, id) => {
          return (
            <div key={id}>
              <Input
                type="text"
                name="social"
                label={`Social ${id + 1}`}
                placeholder={`social ${id + 1}`}
                value={item.social}
                onChange={(e) => handleChange(e, item.id)}
              />
              <div className="flexCenter mb-2">
                {form.length - 1 === id && form.length < 5 && (
                  <button onClick={handleAddForm} type="button" className="btn">
                    Add Social Media
                  </button>
                )}
                {form.length - 1 == id && form.length > 1 && (
                  <button
                    onClick={() => handleDelete(id)}
                    type="button"
                    className="btn-danger"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div>
          <button
            type="submit"
            className={form[0].social === "" ? "btn-disabled" : "btn"}
            disabled={form[0].social === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
