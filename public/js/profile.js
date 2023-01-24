const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#paper-name').value.trim();
  const paperfile = document.querySelector('#paper-file');
  const description = document.querySelector('#paper-desc').value.trim();
const formData = new FormData();
formData.append("name", name);
formData.append("description", descriptio);
formData.append("paperfile", paperfile.files[0]);

  if (name && paperfile && description) {
    const response = await fetch(`/api/papers`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create paper');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/paper/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete paper');
    }
  }
};

document
  .querySelector('.new-paper-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.paper-list')
  .addEventListener('click', delButtonHandler);
