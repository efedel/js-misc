/* JS code to hexdump a file via a local webpage.
 * (c) Copyright 2015 mkfs <https://github.com/mkfs>
 * See https://github.com/mkfs/js-hexdump.git
 */

// build a HEX + ASCII dump for a block of 16 characters
function hexdump_block(block) {
    var hex_str = '', asc_str = '';

    for( var i = 0; i < block.length; i++ ) {
	var c = block.charAt(i);
	var n = c.charCodeAt(0);

	// append HEX representation
	if ( n < 16 ) hex_str += "0";
	hex_str += n.toString(16) + ' ';

	// append ASCII representation
	if ( n > 0x1F && n < 0x7F ) {

	  // Remember HTML brackets!
	  if (c[0] == '<') {
	    c = "&lt;";
	  } else if (c[0] == '>') {
	    c = "&gt;";
	  }
	  asc_str += c;
	} else {
	  asc_str += '.';
	}
    }

    // poor man's sprintf
    return String(hex_str + " ".repeat(48)).slice(0, 48) + "| " + asc_str;
}

// Return a standard hexdump (ADDR : HEX | ASCII) for contents of String
function hexdump_buf(buf) {
	var lines = []
	var addr = 0;
	var num_blocks = (buf.length / 16);
	for ( var i=0; i < num_blocks; i++) {
	    lines.push( String("00000000" + addr.toString(16)).slice(-8) + 
		        " : " + hexdump_block( buf.slice(i*16, (i*16)+16) ) );
	    addr += 16;
	}
        return lines.join("\n")
}

// Fill the specified DIV tag with the hexdump of the provided file
function hexdump_file(f, output_div) {
    var r = new FileReader();
    r.onload = function(e) { 
    	var dump_elem = document.getElementById(output_div)
        var pre = document.createElement('pre');

	fname = f.name.replace(/[^a-zA-Z0-9]/g, '-');
        pre.id = 'hexdump-' + fname;

	pre.innerHTML = hexdump_buf(e.target.result);

        dump_elem.appendChild(pre);
    };

    r.readAsBinaryString(f);
}

/* Example of use:
    <!-- INPUT FILE element to load local file -->
    <input type='file' id='binary-file' name='binary-file'></input>
    <br>
    <!-- DIV element to fill with hexdump -->
    <div id=dump></div>
    <!-- SCRIPT element to connect call hexdump on file upload -->
    <script type='text/javascript'>
        // handler to fill DIV element "dump" with hexdump of file in INPUT FILE
        // element "binary-file"
        document.getElementById('binary-file').onchange = function(e) {
            var f = e.target.files[0];
            if (f) {
                var container = document.getElementById('dump')
                var div = document.createElement('dump');
                var span = document.createElement('span');

                fname = f.name.replace(/[^a-zA-Z0-9]/g, '-');
                div.id = "hexdump-container-" + fname

                span.innerHTML = '<b>' + f.name + '<b>';
                span.id = "hexdump-caption-" + fname;
                div.appendChild(span);

                hexdump_file(f, div.id);
    
                container.appendChild(div)
            }
        }
    </script'>
*/
