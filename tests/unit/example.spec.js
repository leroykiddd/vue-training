import { mount } from "@vue/test-utils";
import TableRow from "@/components/UI/TableRow";
import AdditionalInformation from "@/components/UI/AdditionalInformation";

describe("Компонент TableRow", () => {
  const wrapper = mount(TableRow, {
    propsData: {
      userData: {
        id: 1,
        firstName: "Denis",
        lastName: "Petrov",
        email: "leroy@mail.ru",
        phone: "89999999999",
      },
    },
  });

  it("отображает корректную разметку", () => {
    expect(wrapper.html()).toContain('<div class="field">Denis</div>');
    expect(wrapper.html()).toContain('<div class="field">Petrov</div>');
    expect(wrapper.html()).toContain('<div class="field">leroy@mail.ru</div>');
    expect(wrapper.html()).toContain('<div class="field">89999999999</div>');
  });
});

describe("Компонент AdditionalInformation", () => {
  const wrapper = mount(AdditionalInformation, {
    propsData: {
      user: {
        id: 101,
        firstName: "Sue",
        lastName: "Corson",
        email: "DWhalley@in.gov",
        phone: "(612)211-6296",
        address: {
          streetAddress: "9792 Mattis Ct",
          state: "WI",
          zip: "22178",
        },
        description: "et lacus magna dolor...",
      },
    },
  });

  it("Отображает корректную разметку", () => {
    expect(wrapper.html()).toContain("<b>Город не указан</b>");
    expect(wrapper.html()).toContain("<b>9792 Mattis Ct</b>");
  });
  it("Корректно работает с именем пользователя", () => {
    expect(wrapper.html()).toContain(
      "Выбран пользователь <b>Sue Corson</b>"
    );
  });
});
