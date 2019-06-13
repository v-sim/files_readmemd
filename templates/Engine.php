<?php
/**
 * @author Matthieu Le Corre <matthieu.lecorre@univ-nantes.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** @var $l \OCP\IL10N */
/** @var $_ array */

?>


<!--div id="readmeMD-engine" class="section">
    <h2> <?php p($l->t("Engines")) ; ?></h2>
    <p>
    
        <input id="readmeMD-engine-asciidoc" name="readmeMD-engine-asciidoc"
            type="checkbox" class="checkbox " value="1" <?php if ($_['show_asciidoc'] == "true"): ?> checked="checked"<?php endif; ?>
        />
        <label for="readmeMD-engine-asciidoc"><?php p($l->t("Render Asciidoc content")) ; ?></label>
    </p><p>
        <input id="readmeMD-engine-html" name="readmeMD-engine-html"
            type="checkbox" class="checkbox " value="1" <?php if ($_['show_html'] =="true" ): ?> checked="checked"<?php endif; ?>
        />
        <label for="readmeMD-engine-html"><?php p($l->t("Render HTML content")) ; ?></label>  
    </p>

</div-->