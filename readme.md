# My Localstorage

## Description

A tool that helps you store data in the LocalStorage of your browser.
It can be used when you want to build a small application that works offline and does not require a large database to store data.

## Getting Started

### Installation

...

## Usage

first create a instance of MyLocalStorage

```JS
const storage = new myLocalStorage;
```

<details>
 <summary>Basics</summary>

Set Item

```JS
storage.set('demo', 123);
```

Update Item

```JS
storage.update('demo', 222);
```

Get Item

```JS
storage.get('demo');
```

Remove Item

```JS
storage.remove('demo');
```

Check if Storage has Item

```JS
storage.has('demo');
```

</details>

## License

Distributed under the MIT License. See <u>LICENCE.txt</u> for more information.

## Contact

hallo@jpbehrens.de
