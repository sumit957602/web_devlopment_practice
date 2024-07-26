function dosomething(event) {
    event.preventDefault();
    console.log(event);
}

function EventPractice () {
    return (
        <div>
            <form>
                <input type="text" name="message" placeholder="Input anything" />
                &nbsp;&nbsp;
                <button type="submit" onClick={dosomething}>Submit</button>
            </form>
        </div>
    );
}

export default EventPractice;