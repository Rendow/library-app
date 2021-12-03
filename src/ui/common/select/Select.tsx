import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './Select.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[];
    onChangeOption?: (option: any) => void;
    name?: string;
};

const Select = React.memo(({
    options,
    name,
    className,
    onChange,
    onChangeOption,
    ...restProps
}:SuperSelectPropsType) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value);
        onChange && onChange(e);
    };

    const mappedOptions: any[] = options
        ? options.map((a, i) => (
              <option className={s.option} value={a} key={i + '' + a}>
                  {a}
              </option>
          ))
        : [];

    const finalClassName = `${s.default} ${className}`;

    return (
        <select name={name} className={finalClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}{' '}
        </select>
    );
});

export default Select;
