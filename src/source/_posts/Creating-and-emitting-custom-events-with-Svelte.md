---
title: 'Creating and emitting custom events with Svelte'
date: 2020-02-25 16:23:22
metatags: svelte
description: Creating custom events inside Svelte components.
cover: "blog-images/custom-events-with-svelte.jpg"
---

One of the benefits of creating custom components like `<SubscribeForm />` using any modern frontend framework is that we can easily create custom events according to the purpose of the component we are building, and doing so, we enable them to expose a clear interface to the other parts of the application. 

Let's take as an example, the `SubscribeForm` component, which contains multiple elements, like a title, input fields, and a button. An `on:click` event isn't as clear as `on:subscribe` or `on:submit`, especially on components with multiple elements.

## Creating a custom event

For the sake of this article, I will use the component `SubscribeForm` as an example. This component  has two input fields, one button, and it emits/dispatches an event `subscribe`, which will enable developers to pass any function to handle the form submission.

* Clone svelte template: `git clone git@github.com:sveltejs/template.git`
* Inside the project, install the dependencies by running: `npm install`
* Create a new component at `src/` folder, and name it to `SubscribeForm.svelte`:

```html
<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const form = {
    name: "",
    email: ""
  };
</script>

<style></style>

<div class="newsletter-form">
  <div class="field">
    <input
      type="text"
      placeholder="Name"
      on:input={ event => form.name = event.target.value }
    >
  </div>

  <div class="field">
    <input
      type="text"
      placeholder="E-mail"
      name="email"
      on:input={ event => form.email = event.target.value }
    >
  </div>

  <div class="field">
    <button on:click={ () => dispatch("subscribe", form) }>
      Subscribe me
    </button>
  </div>
</div>

```

The code describes the body of the `SubscribeForm` component:

* `createEventDispatcher` was required, initialized and assigned in the `dispatch` constant to create a dispatcher

* The `form` object was created to store the data from the input fields

* Each input element is using the `on:input` event to capture the values that the user will type, and it is storing them in the `form` object

* In the button, element is where the new event is dispatched, and the content of the `form` is passed as an argument, to later be available in the event handler through `event.details.form`

  

To use the component above, you'll need to import it inside another component, for instance, `App.svelte`, and pass the event handler:

```html
<script>
	import NewsletterForm from "./NewsletterForm.svelte";
	
  function addNewUser(userData) {
    console.log(userDate);
    // Do something here.
  }
	
</script>

<main>
	<NewsletterForm
		on:subscribe={ event => addNewUser(event.detail.form) }
	/>
</main>
```

## References

[Component Events](https://svelte.dev/tutorial/component-events)

[Post cover by Patricia Jekki](https://unsplash.com/photos/bQxU4Hk-Hyw)