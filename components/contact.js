export const contact = `

<div class="container mt-5 py-5">
    <h1 class="text-center mb-5">Contact</h1>
    <form>
    <div class="mb-3">
        <label for="nombre" class="form-label">Name</label>
        <input type="text" class="form-control" id="nombre" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required>
    </div>
    <div class="mb-3">
        <label for="mensaje" class="form-label">Messege</label>
        <textarea class="form-control" id="mensaje" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send !</button>
    </form>
</div>

`