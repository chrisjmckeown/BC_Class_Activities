
const styles = {
  background: {
    background: "green"
  },
  h1: {
    fontSize: 100
  }
};


function Navbar() {
  return (
    <div style={styles.background} >
      <nav style={styles.background} className="navbar navbar-light bg-light">
        <span style={styles.background} className="navbar-brand mb-0 h1">Welcome</span>
      </nav>
      {/* Hello */}
    </div>
  );
}

export default Navbar;
